<?php

require_once 'database.php';
$database = new Database();

$method   = $_SERVER['REQUEST_METHOD'];
$path     = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path     = trim($path, '/');
$segments = explode('/', $path);

if (isset($segments[2])) {
    $id = $segments[2];
} else {
    $id = null;
}

switch($method){
    // -------------------------------------------------------
    // GET /pedidos_itens
    // GET /pedidos_itens/1
    // -------------------------------------------------------
   case 'GET':
        // 1. Pegamos o ID enviado pelo JS (?pedido_id=X)
        $pedido_id_url = $_GET['pedido_id'] ?? null;

        if ($pedido_id_url) {
            // 2. Fazemos a consulta filtrada com o JOIN para pegar o nome do produto
            $sql = "SELECT pedido_itens.*, produtos.nome AS produto_nome 
                    FROM pedido_itens 
                    INNER JOIN produtos ON pedido_itens.produto_id = produtos.id 
                    WHERE pedido_itens.pedido_id = :pedido_id";
            
            $resultado = $database->executeQuery($sql, [':pedido_id' => $pedido_id_url]);
            $pedidos_itens = $resultado->fetchAll();

            echo json_encode([
                'status' => 'success',
                'data'   => $pedidos_itens
            ]);
        } else {
            // Caso não venha o ID, retornamos erro em formato JSON
            http_response_code(400);
            echo json_encode([
                'status' => 'error',
                'message' => 'ID do pedido não informado.'
            ]);
        }
        break;
        case 'POST':
            $body = json_decode(file_get_contents('php://input'), true);
            $pedido_id =  $body['pedido_id'] ?? null;//$pedidos_id = trim($body['pedido_id']);
            $produto_id = $body['produto_id'] ?? null;
            $quantidade = $body['quantidade'] ?? null;

            if(!$produto_id){
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Campo produto_id não informado'
                ]);
                break;
            }
        
            if(!$pedido_id){
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Campo pedido_id não informado'
                ]);
                break;
            }
        
            if(!$quantidade){
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Campo quantidade não informado'
                ]);
                break;
            }
            
            $stmt = $database->executeQuery("SELECT * FROM produtos WHERE id = :produto_id",[':produto_id' => $produto_id]);
            $produto = $stmt->fetch();

            if(!$produto){
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Campo produto não encontrado'
                ]);
                break;
            }

            $preco = $produto['preco'];

            $preco_rec = $quantidade * $preco;
             $database->executeQuery(
            "INSERT INTO pedido_itens (pedido_id, produto_id, quantidade, preco) VALUES (:pedido_id, :produto_id, :quantidade, :preco)",
            [
               ':pedido_id' => $pedido_id,
               ':produto_id'=> $produto_id,
               ':quantidade'=> $quantidade,
               ':preco' => $preco_rec


            ]);
      
        
    

        http_response_code(201);
        echo json_encode([
            'status' => 'success',
            'message' => 'Itens de pedido cadastrado com sucesso',
            'idCategoria' => $database->lastInsertId()
        ]);
        
        break;
    // -------------------------------------------------------
    // PUT /categorias/1
    // Body: { "nome": "Salgados" }
    // -------------------------------------------------------
    case 'PUT':
        
        break;
    // -------------------------------------------------------
    // DELETE /categorias/1
    // -------------------------------------------------------
    case 'DELETE':
        if (!$id) {
            http_response_code(400);
            echo json_encode([
                'status'  => 'error',
                'message' => 'Informe o id da categoria na URL.'
            ]);
            break;
        }
 
        $stmt = $database->executeQuery(
            'DELETE FROM pedido_itens WHERE id = :id',
            [':id' => $id]
        );
 
        if ($stmt->rowCount() === 0) {
            http_response_code(404);
            echo json_encode([
                'status'  => 'error',
                'message' => 'Produto não encontrada.'
            ]);
            break;
        }
 
        echo json_encode([
            'status'  => 'success',
            'message' => 'Produto removida com sucesso.'
        ]);
        break;
    // -------------------------------------------------------
    // Método não permitido
    // -------------------------------------------------------
    default:
        http_response_code(405);
        echo json_encode([
            'status'  => 'error',
            'message' => 'Método não permitido.'
        ]);
}


?>
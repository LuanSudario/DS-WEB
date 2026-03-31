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
    // GET /categorias 
    // GET /categorias/1
    // -------------------------------------------------------
    case 'GET':
        $resultado = $database->executeQuery('SELECT * FROM produtos');
        $produtos = $resultado->fetchAll();

        echo json_encode([
            'status' => 'success',
            'data'   => $produtos
        ]);
        break;
    // -------------------------------------------------------
    // POST /categorias
    // Body: { "nome": "Bebidas" }
    // -------------------------------------------------------
    case 'POST':
        $body = json_decode(file_get_contents('php://input'), true);
        $nome = trim($body['nome']);
        $preco = trim($body['preco']);
        $categoria_id = trim($body['categoria_id']);
        $disponivel = trim($body['disponivel']);

        if(!$nome){
            echo json_encode([
                'status' => 'error',
                'message' => 'Campo nome não informado'
            ]);
            break;
        }
        if(!$preco){
            echo json_encode([
                'status' => 'error',
                'message' => 'Campo preco não informado'
            ]);
            break;
        }
        if(!$categoria_id){
            echo json_encode([
                'status' => 'error',
                'message' => 'Campo $categoria_id não informado'
            ]);
            break;
        }
        if(!$disponivel){
            echo json_encode([
                'status' => 'error',
                'message' => 'Campo disponivel não informado'
            ]);
            break;
        }
        $database->executeQuery(
            "INSERT INTO produtos (nome, preco, categoria_id, disponivel) VALUES (:nome,:preco,:categoria_id,:disponivel)",
            [
                ':nome' => $nome,
                ':preco' => $preco,
                ':categoria_id' => $categoria_id,
                ':disponivel' => $disponivel
            ]
        );

        http_response_code(201);
        echo json_encode([
            'status' => 'success',
            'message' => 'Categoria cadastrada com sucesso',
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
            'DELETE FROM produtos WHERE id = :id',
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
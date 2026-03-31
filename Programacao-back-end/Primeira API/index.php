<?php

header('Content-Type: application/json'); // Define o tipo de conteúdo da resposta como JSON
header('Access-Control-Allow-Origin: *'); // Permite requisições de qualquer origem (CORS)
header('Access-Control-Allow-Methods: GET, POST'); // Define os métodos HTTP permitidos

$method = $_SERVER['REQUEST_METHOD']; // Captura o método HTTP da requisição atual (GET, POST, etc.)
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH); // Extrai apenas o caminho da URL, ignorando query string

// Remove barra inicial
$path = trim($path, '/');
// Divide em segmentos
$segments = explode('/',$path);
// Pega o endpoint solicitado
$endpoint = $segments[1] ?? '';           

switch ($endpoint) {
    case 'hello':
        echo json_encode([
            'status'  => 'success',
            'message' => 'Ola! A API esta funcionando.'
        ]);
        break;

    case 'produtos':
        echo json_encode([
            'status'  => 'success',
            'nomeProduto' => 'Pao',
            'precoProduto' => 'R$12,30'
        ]);

    case 'echo':
        if ($method === 'POST'){
            // Lê e decodifica o JSON do corpo da requisição para um array PHP
            $input = json_decode(file_get_contents('php://input'), true); 
        }else {
            $input = "Metodo GET";
        }
        echo json_encode([
            'status' => 'success',
            'echo'   => $input
        ]);
        break;

    default:
        http_response_code(404);
        echo json_encode([
            'status'  => 'error',
            'message' => 'Endpoint não encontrado.'
        ]);
}
?>
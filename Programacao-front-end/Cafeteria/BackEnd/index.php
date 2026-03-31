<?php

header('Content-Type: application/json'); // Define o tipo de conteúdo da resposta como JSON
header('Access-Control-Allow-Origin: *'); // Permite requisições de qualquer origem (CORS)
header('Access-Control-Allow-Headers: Content-Type'); // Permite receber Content-Type no Header
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS'); // Define os métodos HTTP permitidos

$method = $_SERVER['REQUEST_METHOD']; // Captura o método HTTP da requisição atual (GET, POST, etc.)
$path   = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH); // Extrai apenas o caminho da URL, ignorando query string

// Remove barra inicial
$path = trim($path, '/');
// Divide em segmentos
$segments = explode('/',$path);
// Pega o endpoint solicitado
$endpoint = $segments[1] ?? '';

//Registra log de chamada da api
$log = date('d-m-Y H:i:s') . " | $method | $path\n";
file_put_contents('log.txt', $log, FILE_APPEND);

//Permite que o Fetch do Javascript consulte se a API aceita determinadas opções, por exemplo o "DELETE"
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

switch ($endpoint) {
    case 'categorias':
        require_once 'controllers/categorias.php';
        break;

    case 'produtos':
        require_once 'controllers/produtos.php';
        break;

    default:
        http_response_code(404);
        echo json_encode([
            'status'  => 'error',
            'message' => 'Endpoint nao encontrado.'
        ]);
}
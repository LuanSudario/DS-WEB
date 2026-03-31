<?php

class Database extends PDO
{
    private $DB_NAME     = 'cafeteria';
    private $DB_USER     = 'root';
    private $DB_PASSWORD = '';
    private $DB_HOST     = '127.0.0.1';
    private $DB_PORT     = 3306;

    public function __construct()
    {
        try {
            parent::__construct(
                "mysql:host=$this->DB_HOST;port=$this->DB_PORT;dbname=$this->DB_NAME;charset=utf8",
                $this->DB_USER,
                $this->DB_PASSWORD,
                [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, //Exibe os erros 
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC] //Todos os retornos do Banco de Dados ja estarão no formato associativo
            );
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode([
                'status'  => 'error',
                'message' => 'Falha na conexão com o banco.',
                'detalhe' => $e->getMessage()
            ]);
            exit;
        }
    }

    private function setParameters($stmt, $key, $value)
    {
        $stmt->bindValue($key, $value);
    }

    private function mountQuery($stmt, $parameters)
    {
        foreach ($parameters as $key => $value) {
            $this->setParameters($stmt, $key, $value);
        }
    }

    public function executeQuery(string $query, array $parameters = [])
    {
        $stmt = $this->prepare($query);
        $this->mountQuery($stmt, $parameters);
        $stmt->execute();
        return $stmt;
    }
}
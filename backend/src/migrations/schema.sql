CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    type ENUM('Renda', 'Gasto') NOT NULL,
    category ENUM('Comida', 'Transporte', 'Entretenimento', 'Saúde', 'Educação', 'Pagamento de Cliente', 'Despesas de Trabalho', 'Outro') NOT NULL,
    account_type ENUM('Pessoal', 'Empresarial') NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS bills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount DECIMAL(10, 2) NOT NULL,
    description VARCHAR(255) NOT NULL,
    due_date DATETIME NOT NULL,
    paid BOOLEAN DEFAULT FALSE NOT NULL,
    category ENUM('Comida', 'Transporte', 'Entretenimento', 'Saúde', 'Educação', 'Pagamento de Cliente', 'Despesas de Trabalho', 'Outro') NOT NULL,
    account_type ENUM('Pessoal', 'Empresarial') NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
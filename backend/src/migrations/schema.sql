CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    value DECIMAL(10, 2) NOT NULL,
    type ENUM('income', 'expense') NOT NULL,
    category ENUM('food', 'transport', 'entertainment', 'health', 'education', 'client_payment', 'work_expenses', 'other') NOT NULL,
    account_type ENUM('personal', 'business') NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS bills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount DECIMAL(10, 2) NOT NULL,
    description VARCHAR(255) NOT NULL,
    due_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    paid BOOLEAN DEFAULT FALSE NOT NULL,
    category ENUM('food', 'transport', 'entertainment', 'health', 'education', 'client_payment', 'work_expenses', 'other') NOT NULL,
    account_type ENUM('personal', 'business') NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
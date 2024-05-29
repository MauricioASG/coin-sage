DROP DATABASE IF EXISTS coinsage;
CREATE DATABASE coinsage;

USE coinsage;

CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    passw VARCHAR(100) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    salario DECIMAL(10, 2) DEFAULT 0
);

CREATE TABLE Transacciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    monto DECIMAL(10, 2) NOT NULL,
    tipo ENUM('Ingreso', 'Gasto') NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

CREATE TABLE Categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255),
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

CREATE TABLE Tarjetas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    tipo ENUM('Crédito', 'Débito') NOT NULL,
    nombre_titular VARCHAR(100) NOT NULL,
    numero_tarjeta VARCHAR(16) NOT NULL,
    fecha_vencimiento DATE NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

-- Inserciones en la tabla Usuario
INSERT INTO Usuario (nombre, email, passw)
VALUES ('Ana García', 'ana@example.com', 'pass123'),
       ('Pedro López', 'pedro@example.com', 'securePwd'),
       ('María Ramirez', 'maria@example.com', 'password123'),
       ('Carlos Martínez', 'carlos@example.com', 'mypass123'),
       ('Laura Pérez', 'laura@example.com', 'pwdLaura45');

-- Inserciones en la tabla Transacciones
INSERT INTO Transacciones (usuario_id, monto, tipo) 
VALUES (1, 50.00, 'Gasto'),
       (2, 100.00, 'Ingreso'),
       (3, 75.50, 'Gasto'),
       (4, 120.00, 'Ingreso'),
       (5, 30.25, 'Gasto');

-- Inserciones en la tabla Categorias
INSERT INTO Categorias (usuario_id, nombre, descripcion) 
VALUES (1, 'Comida', 'Gastos en alimentación'),
       (2, 'Salario', 'Ingresos mensuales'),
       (3, 'Transporte', 'Gastos en movilidad'),
       (4, 'Compras', 'Gastos en compras varias'),
       (5, 'Entretenimiento', 'Gastos en actividades recreativas');

-- Inserciones en la tabla Tarjetas
INSERT INTO Tarjetas (usuario_id, tipo, nombre_titular, numero_tarjeta, fecha_vencimiento) 
VALUES (1, 'Crédito', 'Ana García', '1234567812345678', '2025-06-01'),
       (2, 'Débito', 'Pedro López', '8765432187654321', '2024-09-01'),
       (3, 'Crédito', 'María Ramirez', '5678123456781234', '2026-11-01'),
       (4, 'Débito', 'Carlos Martínez', '4321876543218765', '2023-04-01'),
       (5, 'Crédito', 'Laura Pérez', '9876543298765432', '2027-02-01');

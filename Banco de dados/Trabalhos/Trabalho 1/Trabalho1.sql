CREATE TABLE tbl_Lojas (
ID_Loja INTEGER PRIMARY KEY IDENTITY,
Cidade VARCHAR(30) NOT NULL,
Estado VARCHAR(30) NOT NULL
)
INSERT INTO tbl_Lojas VALUES
('São Paulo','São Paulo'), ('Belo Horizonte','Minas Gerais'), ('São Paulo','São Paulo'), ('Rio de Janeiro','Rio de Janeiro'),
('Vitória','Espírito Santo'), ('Cascavel','Paraná'), ('Salvador','Bahia'), ('São Paulo','São Paulo'), ('Osasco','São Paulo'),
('Campinas','São Paulo'),('Belo Horizonte','Minas Gerais'), ('Campos','Rio de Janeiro'), ('Rio de Janeiro','Rio de Janeiro'), ('Petrópolis','Rio de Janeiro');

SELECT * FROM tbl_Lojas

CREATE TABLE tbl_Vendedor (
ID_Vendedor INTEGER PRIMARY KEY,
Vendedor VARCHAR(50) NOT NULL
)

INSERT INTO tbl_Vendedor VALUES 
(1001, 'Maria Fernandes'), (1002,'André Pereira'), (1003,'Mateus Gonçalves'), (1004,'Artur Moreira'),(1005,'Rodrigo Fagundes'),
(1006,'Josias Silva'), (1007,'Fernando Zambrini'), (1008,'Aline Sutter'), (1009,'Ana Teixeira');

SELECT * FROM tbl_Vendedor

CREATE TABLE tbl_Produtos (
ID_Produto INTEGER PRIMARY KEY IDENTITY,
Produto VARCHAR(50) NOT NULL,
Categoria VARCHAR(50) NOT NULL,
Segmento VARCHAR(50) NOT NULL,
Fabricante VARCHAR(50) NOT NULL
)

INSERT INTO tbl_Produtos VALUES
('LG K10 TV Power','Celulares','Corporativo','LG'),('Geladeira Duplex','Eletrodomésticos','Doméstico','Brastemp'),
('Lavadora 11 Kg','Eletrodomésticos','Doméstico','Brastemp'),('Notebook Dell 8 GB','Eletrodomésticos','Doméstico','Brastemp'),
('Desktop HP 16 GB','Eletrodomésticos','Doméstico','Electrolux'), ('Micro-Ondas','Eletrodomésticos','Doméstico','Brastemp'),
('Grill','Eletrodomésticos','Doméstico','Brastemp'), ('Forno-Micro-Ondas','Eletrodomésticos','Doméstico','Electrolux'),
('Fritadeira','Eletrodomésticos','Doméstico','Brastemp'), ('Ar Condicionado','Eletrodomésticos','Doméstico','Electrolux'),
('Aspirador','Eletrodomésticos','Doméstico','Brastemp'), ('Impressora Deskjet','Eletrodomésticos','Doméstico','Brastemp'),
('Secadora Vapor','Eletrodomésticos','Doméstico','Brastemp'), ('Samsung Galaxy 8','Eletrodomésticos','Doméstico','Brastemp'),
('Sony Experia XA','Eletrodomésticos','Doméstico','Brastemp'), ('Morotola Moto G5','Eletrodomésticos','Doméstico','Electrolux'),
('Ventilador','Eletrodomésticos','Doméstico','Brastemp'), ('Processador de Alimentos','Eletrodomésticos','Doméstico','Brastemp'),
('Liquidificador','Eletrodomésticos','Doméstico','Electrolux');

CREATE TABLE tbl_Vendas (
ID_Venda INTEGER PRIMARY KEY IDENTITY,
ID_Loja INTEGER NOT NULL,
ID_Vendedor INTEGER NOT NULL,
DataVenda DATE NOT NULL,
ID_Produto INTEGER NOT NULL,
ValorVenda DECIMAL(10,2) NOT NULL
CONSTRAINT FK_ID_Loja
FOREIGN KEY (ID_Loja)
REFERENCES tbl_Lojas (ID_Loja)
ON DELETE CASCADE ON UPDATE CASCADE,

CONSTRAINT FK_ID_Vendedor
FOREIGN KEY (ID_Vendedor)
REFERENCES tbl_Vendedor (ID_Vendedor)
ON DELETE CASCADE ON UPDATE CASCADE,

CONSTRAINT FK_ID_Produto
FOREIGN KEY (ID_Produto)
REFERENCES tbl_Produtos (ID_Produto)
ON DELETE CASCADE ON UPDATE CASCADE
)
EXEC sp_help 'tbl_Vendas'

INSERT INTO tbl_Vendas VALUES
(1, 1009, '2012-10-04', 1, 679.00), (2, 1006, '2012-01-01', 2, 832.00), (3, 1006, '2012-02-02', 3, 790.00), (4, 1003, '2012-03-03', 4, 765.32),
(5, 1004, '2012-04-04', 5, 459.89), (6, 1005, '2012-05-04', 6, 590.98), (7, 1006, '2012-06-04', 7, 1000.91), (8, 1007, '2012-07-04', 8, 1229.00),
(9, 1003, '2012-08-04', 9, 1300.00), (10, 1002, '2012-09-04', 10, 1290.00), (11, 1009, '2012-09-04', 11, 1287.00), (12, 1006, '2012-11-04', 12, 1651.00),
(13, 1006, '2012-11-04', 13, 1100.00), (14, 1003, '2012-12-04', 14, 1190.00), (1, 1004, '2012-12-04', 15, 1190.98), (2, 1005, '2013-01-02', 16, 877.00),
(3, 1006, '2013-02-02', 17, 982.00), (4, 1007, '2013-03-02', 18, 872.00), (5, 1003, '2013-04-02', 19, 799.00), (6, 1002, '2013-05-02', 1, 899.00);

SELECT * FROM tbl_Vendas

UPDATE tbl_Vendas SET DataVenda = '2013-06-04', ValorVenda= 1150.10 WHERE ID_Venda = 1;
UPDATE tbl_Vendas SET DataVenda = '2012-05-01', ValorVenda= 450.00 WHERE ID_Venda = 7;
UPDATE tbl_Vendas SET DataVenda = '2011-08-03', ValorVenda= 960.00 WHERE ID_Venda = 13;

SELECT * FROM tbl_Vendas;

DELETE FROM tbl_Vendas WHERE ID_Venda = 20;

SELECT ID_Venda AS 'Número da Venda', tbl_Lojas.Cidade, tbl_Lojas.Estado, tbl_Vendedor.Vendedor, tbl_Produtos.Produto, tbl_Produtos.Fabricante, ValorVenda AS 'Valor da Venda' 
FROM tbl_Vendas 
INNER JOIN tbl_Lojas
ON tbl_Vendas.ID_Loja = tbl_Lojas.ID_loja
INNER JOIN tbl_Vendedor
ON tbl_Vendas.ID_Vendedor = tbl_Vendedor.ID_Vendedor
INNER JOIN tbl_Produtos
ON tbl_Vendas.ID_Produto = tbl_Produtos.ID_Produto;

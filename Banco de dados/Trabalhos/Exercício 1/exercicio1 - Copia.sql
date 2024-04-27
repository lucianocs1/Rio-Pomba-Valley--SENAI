INSERT INTO tbl_pessoas
(nome, profissao, nascimento, sexo, peso, altura, nacionalidade)
values 
('Carla', 'Analista','1992-08-01', 'F', '55.8', '1.77', 'Brasil');

INSERT INTO tbl_pessoas
(nome, profissao, nascimento, sexo, peso, altura, nacionalidade)
values 
('Rodrigo', 'Professor','1977-07-28', 'M', '80.8', '1.80', default),
('Diego', 'Motorista','1960-10-10', 'M', '90.5', '1.90', 'Uruguai'),
('Anderson', 'Advogado','1965-09-10', 'F', '75.8', '1.75', 'Argentina');

SELECT * FROM tbl_pessoas

USE Biblioteca

INSERT INTO tbl_editoras (Nome_Editora) VALUES ('Prentice Hall');
INSERT INTO tbl_editoras (Nome_Editora) VALUES ('O´Reilly');
INSERT INTO tbl_editoras (Nome_Editora) VALUES ('Microsoft Press');
INSERT INTO tbl_editoras (Nome_Editora) VALUES ('Wiley');
INSERT INTO tbl_editoras (Nome_Editora) VALUES ('McGraw-Hill Education');

SELECT * FROM tbl_editoras

INSERT INTO tbl_autores
VALUES
(1, 'Daniel', 'Barret'),
(2, 'Gerald', 'Carter'),
(3, 'Mark', 'Sobell'),
(4, 'William', 'Stanek'),
(5, 'Richard', 'Blum'),
(6, 'Jostein', 'Gaarder'),
(7, 'Umberto', 'Eco'),
(8, 'Neil', 'De Grasse Tyson'),
(9, 'Stephen', 'Hawking'),
(10, 'Stephen', 'Jay Gould'),
(11, 'Charles', 'Darwin'),
(12, 'Alan', 'Turing'),
(13, 'Simon', 'Monk'),
(14, 'Paul', 'Scherz');

SELECT * FROM tbl_autores
CREATE TABLE preco_livro

INSERT tbl_categorias
VALUES
(1, 'Tecnologia'),
(2, 'História'),
(3, 'Literatura'),
(4, 'Astronomia'),
(5, 'Botânica');

SELECT * FROM tbl_categorias

INSERT INTO tbl_livro (Nome_Livro, ISBN13, ISBN10, Data_Pub, Preco_Livro, ID_Categoria, ID_Autor, ID_Editora)
VALUES
('Linux Command Line and Shell Scripting','9781118983843', '111898384X', '20150109', 68.35, 1, 5, 4),
('SSH, the Secure Shell','9780596008956', '0596008953', '20050517', 58.30, 1, 1, 2),
('Using Samba','9780596002565', '0596002564', '20031221', 61.45, 1, 2, 2),
('Fedora and Red Hat Linux', '9780133477436', '0133477436', '20140110', 62.24, 1, 3, 1),
('Windows Server 2012 Inside Out','9780735666313', '0735666318', '20130125', 66.80, 1, 4, 3),
('Microsoft Exchange Server 2010','9780735640610', '0735640610', '20101201', 45.30, 1, 4, 3),
('Practical Electronics for Inventors', '9781259587542', '1259587541', '20160324', 67.80, 1, 13, 5);

USE Exercicios

CREATE TABLE tbl_pais (
id_pais SMALLINT PRIMARY KEY,
nome_pais VARCHAR(35) NOT NULL,
pop_mi DECIMAL(10,2) NOT NULL,
pib_tri DECIMAL(10,2) NOT NULL,
expec_vida DECIMAL(5,2) NOT NULL
)


CREATE TABLE tbl_cidade (
id_cidade SMALLINT PRIMARY KEY NOT NULL,
nome_cidade VARCHAR(35) NOT NULL,
id_pais SMALLINT NOT NULL,
pop_mi DECIMAL(10,2) NOT NULL,
capital_pais VARCHAR(5) NOT NULL,
CONSTRAINT fk_id_pais FOREIGN KEY
(id_pais)
REFERENCES tbl_pais(id_pais)

)

SELECT * FROM tbl_pais

INSERT INTO tbl_pais
VALUES
(1, 'Canadá', 38, 1.6, 77.2),
(2, 'México', 129, 1.1, 69.1),
(3, 'Brasil', 212, 1.4, 65.7),
(4, 'Estados Unidos', 329, 20, 75.7);

INSERT INTO tbl_cidade
VALUES
(1,'Washington', 4, 3.3, 'Sim'),
(2,'Monterrey', 2, 2.0, 'Não'),
(3,'Brasília', 3, 3.0, 'Sim'),
(4,'São Paulo', 3, 12.3, 'Não'),
(5,'Ottawa', 1, 0.8, 'Sim'),
(6,'Cidade do México', 2, 14.1, 'Sim'),
(7,'Guadalajara', 2, 1.5, 'Não'),
(8,'New York', 4, 8.8, 'Não'),
(9,'Toronto', 1, 2.9, 'Não');

SELECT * FROM tbl_cidade

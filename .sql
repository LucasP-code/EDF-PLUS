 CREATE DATABASE EDF;

use EDF;


-- area cargos

CREATE TABLE Cargos (
    IDCargos INT PRIMARY KEY,
    NomeCargo VARCHAR(20)
);

INSERT INTO Cargos(IDCargos, NomeCargo)
VALUES (1, 'admin'), (2, 'facilitador'), (3, 'aluno');

select * from Cargos;



-- area Aluno

CREATE TABLE Alunos(
ID int not null auto_increment primary key,
ID_Cargo INT,
Nome varchar(155),
Nome_preferencia varchar(30),
CPF BIGINT,
Cel_whatsapp INT,
Email varchar(90),
Senha varchar(30),
Sexo char(1),
Estado_civil varchar(20),
Modalidade varchar(20),
FOREIGN KEY (ID_Cargo) REFERENCES Cargos(IDCargos)
);

-- inserir exemplo de aluno
INSERT INTO Alunos(ID_Cargo, Nome, Nome_preferencia, CPF, Cel_whatsapp, Email, Senha, Sexo, Estado_civil, Modalidade)
VALUES(3, 'Felipe Cavalcante', 'Felipe', '42828831255', 1499551234, 'felipemainyasuo@gmail.com', "senhalegal", 'M', 'solteiro', 'online');


select * from Alunos;


-- area crianças

CREATE TABLE Criancas(
ID int not null auto_increment primary key,
Aluno_ID INT,
foreign key (Aluno_ID) references Alunos,
Nome varchar(155),
Nome_da_escola varchar(180),
Data_de_nascimento DATE,
Idade INT,
Sexo char(1),
Grau_de_parentesco varchar(25),
Cel_whatsapp INT

);


-- area facilitador

CREATE TABLE Facilitador(
ID int not null auto_increment primary key,
ID_Cargo INT,
Nome varchar(155),
Nome_preferencia varchar(30),
Data_de_nascimento DATE,
Estado_civil varchar(20),
CPF BIGINT,
Cel_whatsapp BIGINT,
CEP INT,
Endereço varchar(155),
Numero INT,
Email varchar(90),
Email_EDF varchar(90),
Ocupacao varchar(40),
UF char(2),
Cidade varchar(40),
Nomes_filhos varchar(155),
Idade_filhos INT,
FOREIGN KEY (ID_Cargo) REFERENCES Cargos(IDCargos)
);


-- inserir facilitador
INSERT INTO Facilitador(ID_Cargo ,Nome, Nome_preferencia, Data_de_nascimento, 
Estado_civil, CPF, Cel_whatsapp, CEP, endereço, numero, 
Email, Email_EDF, Ocupacao, UF, Cidade, Nomes_filhos, Idade_filhos)
VALUES(2 ,'Paula Maria Rosse', 'Paula', '1995-01-07', 'casada', 25737818834, 14991461215, 17123345
, 'rua dias', 1234, 'paulacavalcante123@gmail.com', 'paula.cavalcanteEDF@edf.com', 'facilitadora', 'SP', 'Pompeia', 'Felipe Cavalcante', 12);

select * from Facilitador;


-- area admin

CREATE TABLE Admins (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_Cargo INT,
    Email VARCHAR(90),
    Senha VARCHAR(150),
    FOREIGN KEY (ID_Cargo) REFERENCES Cargos(IDCargos)
);

INSERT INTO Admins(ID_Cargo, Email, Senha) VALUES (1, 'adminEDF123@gmail.com', 'senhadeADM');

select * from Admins;



CREATE TABLE Turma(
ID int not null auto_increment primary key,
ID_Escola INT,
ID_Modulo varchar(15),
Modalidade varchar(160),
Cidade varchar(60),
UF char(2),
foreign key (ID_Escola) references Escola(ID),
foreign key (ID_Modulo) references Modulos(ID)
);

DROP TABLE Turma;

DROP TABLE Modulos;

INSERT INTO Turma(ID_Escola, ID_Modulo, Modalidade, Cidade, UF)
Values(1, '1DBV1', 'online', 'Pompeia', 'SP');

select * from Turma;

SELECT Turma.*,Escola.Nome_escola FROM Turma Inner join Escola ON Turma.ID_Escola = Escola.ID;

DELETE FROM Turma where ID = 1;




CREATE TABLE Facilitador_turma(
ID_turma INT,
ID_facilitador INT,
foreign key (ID_facilitador) references Facilitador(ID),
foreign key (ID_turma) references Turma(ID)

);

DROP TABLE Facilitador_turma;

INSERT into Facilitador_turma(Facilitador_ID, Turma_ID)
values();

CREATE TABLE Escola(
ID int not null auto_increment primary key,
Nome_escola varchar(155),
Diretor_a varchar(155),
Endereço varchar(155),
Numero INT,
Bairro_distrito varchar(80),
Cidade varchar(40),
UF char(2),
CEP INT,
Telefone BIGINT
);

INSERT INTO Escola(Nome_escola, Diretor_a, Endereço, Numero, Bairro_distrito, Cidade, UF, CEP, Telefone)
VALUES('EE Escola muito bacana', 'Luis Felipe Santos', 'Rua Hilario da Silva', 1128, 'Santos jurados', 'Pompeia', 'SP', 12345678, 149912345678);

select * from Escola;

CREATE TABLE Modulos(
ID varchar(12) primary key,
Modulo varchar(120),
Sigla varchar(8),
Sequencia INT
);

INSERT INTO Modulos(ID, Modulo, Sigla, Sequencia)
VALUES ('1DBV1', 'Desenvolvendo Bebês Virtuosos 2', 'DBV2', 2);

select * from Modulos;


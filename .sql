CREATE DATABASE EDF;

use EDF;

-- area cargos

CREATE TABLE Cargos (
    IDCargos INT PRIMARY KEY,
    NomeCargo VARCHAR(20)
);

INSERT INTO Cargos(IDCargos, NomeCargo)
VALUES (1, 'admin'), (2, 'facilitador'), (3, 'aluno');


-- area Aluno

CREATE TABLE Alunos(
ID int not null auto_increment primary key,
ID_Cargo INT,
Nome varchar(155),
Nome_preferencia varchar(30),
CPF BIGINT,
Cel_whatsapp BIGINT,
Email varchar(90) UNIQUE,
Senha varchar(150),
Sexo varchar(20),
Estado_civil varchar(20),
Modalidade varchar(20),
FOREIGN KEY (ID_Cargo) REFERENCES Cargos(IDCargos)
);

-- inserir exemplo de aluno
INSERT INTO Alunos(ID_Cargo, Nome, Nome_preferencia, CPF, Cel_whatsapp, Email, Senha, Sexo, Estado_civil, Modalidade)
VALUES(3, 'Felipe Cavalcante', 'Felipe', '42828831255', 1499551234, 'felipemainyasuo@gmail.com', "senhalegal", 'M', 'solteiro', 'online');


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


CREATE TABLE Modulos(
ID int not null auto_increment primary key,
ID_Modulo varchar(12),
Modulo varchar(120),
Sigla varchar(8),
Sequencia INT
);

INSERT INTO Modulos(ID_Modulo, Modulo, Sigla, Sequencia)
VALUES ('1DBV1', 'Desenvolvendo Bebês Virtuosos 2', 'DBV2', 2);







CREATE TABLE Turma(
ID int not null auto_increment primary key,
ID_Escola INT,
ID_Modulo INT,
Modalidade varchar(160),
Cidade varchar(60),
UF char(2),
foreign key (ID_Escola) references Escola(ID),
foreign key (ID_Modulo) references Modulos(ID)
);


INSERT INTO Turma(ID_Escola, ID_Modulo, Modalidade, Cidade, UF)
Values(1, 1, 'online', 'Pompeia', 'SP');







-- area crianças

CREATE TABLE Criancas (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ID_Aluno INT,
    ID_Escola INT,
    ID_Turma INT,
    Nome VARCHAR(155),
    CPF BIGINT,
    Data_de_nascimento DATE,
    Sexo VARCHAR(20),
    Grau_de_parentesco VARCHAR(25),
    FOREIGN KEY (ID_Aluno) REFERENCES Alunos(ID),
    FOREIGN KEY (ID_Escola) REFERENCES Escola(ID),
    FOREIGN KEY (ID_Turma) REFERENCES Turma(ID)
);

INSERT INTO Criancas(ID_Aluno, ID_Escola, ID_Turma,Nome, CPF, Data_de_nascimento, Sexo, Grau_de_parentesco) 
VALUES (1, 1, 1,"Fatima benez", 50652838855,"2005-1-11", "F", "filho");




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
Email varchar(90) UNIQUE,
Email_EDF varchar(90) UNIQUE,
Senha varchar(150),
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


-- area admin

CREATE TABLE Admins (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_Cargo INT,
    Email VARCHAR(90) UNIQUE,
    Senha VARCHAR(150),
    FOREIGN KEY (ID_Cargo) REFERENCES Cargos(IDCargos)
);

INSERT INTO Admins(ID_Cargo, Email, Senha) VALUES (1, 'adminEDF123@gmail.com', 'senhadeADM');


CREATE TABLE Facilitador_turma(
    ID_turma INT,
    ID_facilitador INT,
    FOREIGN KEY (ID_facilitador) REFERENCES Facilitador(ID),
    FOREIGN KEY (ID_turma) REFERENCES Turma(ID)
);


-- SELECT Turma.*,Escola.Nome_escola FROM Turma Inner join Escola ON Turma.ID_Escola = Escola.ID;
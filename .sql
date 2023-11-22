CREATE DATABASE EDF;

use EDF;

-- area cargos

CREATE TABLE Cargos (
    idCargos INT PRIMARY KEY,
    nomeCargo VARCHAR(20)
);

INSERT INTO Cargos(idCargos, nomeCargo)
VALUES (1, 'admin'), (2, 'facilitador'), (3, 'aluno');


-- area Aluno

CREATE TABLE Alunos(
id int not null auto_increment primary key,
idCargo INT,
nome varchar(155),
nomePreferencia varchar(30),
cpf BIGINT,
celWhatsapp BIGINT,
email varchar(90) UNIQUE,
senha varchar(150),
sexo varchar(20),
estadoCivil varchar(20),
modalidade varchar(20),
FOREIGN KEY (idCargo) REFERENCES Cargos(idCargos)
);

-- inserir exemplo de aluno
INSERT INTO Alunos(idCargo, nome, nomePreferencia, cpf, celWhatsapp, email, senha, sexo, estadoCivil, modalidade)
VALUES(3, 'Felipe Cavalcante', 'Felipe', '42828831255', 1499551234, 'felipemainyasuo@gmail.com', "senhalegal", 'M', 'solteiro', 'online');


CREATE TABLE Escola(
id int not null auto_increment primary key,
nomeEscola varchar(155),
diretor varchar(155),
endereço varchar(155),
numero INT,
bairroDistrito varchar(80),
cidade varchar(40),
uf char(2),
cep INT,
telefone BIGINT
);

INSERT INTO Escola(nomeEscola, diretor, endereço, numero, bairroDistrito, cidade, uf, cep, telefone)
VALUES('EE Escola muito bacana', 'Luis Felipe Santos', 'Rua Hilario da Silva', 1128, 'Santos jurados', 'Pompeia', 'SP', 12345678, 149912345678);


CREATE TABLE Modulos(
id int not null auto_increment primary key,
idModulo varchar(12),
modulo varchar(120),
sigla varchar(8),
sequencia INT
);

INSERT INTO Modulos(idModulo, modulo, sigla, sequencia)
VALUES ('1DBV1', 'Desenvolvendo Bebês Virtuosos 2', 'DBV2', 2);







CREATE TABLE Turma(
id int not null auto_increment primary key,
idEscola INT,
idModulo INT,
modalidade varchar(160),
cidade varchar(60),
uf char(2),
foreign key (idEscola) references Escola(id),
foreign key (idModulo) references Modulos(id)
);


INSERT INTO Turma(idEscola, idModulo, modalidade, cidade, uf)
Values(1, 1, 'online', 'Pompeia', 'SP');







-- area crianças

CREATE TABLE Criancas (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idAluno INT,
    idEscola INT,
    idTurma INT,
    nome VARCHAR(155),
    cpf BIGINT,
    dataNascimento DATE,
    sexo CHAR(1),
    grauParentesco VARCHAR(25),
    celWhatsapp BIGINT,
    FOREIGN KEY (idAluno) REFERENCES Alunos(id),
    FOREIGN KEY (idEscola) REFERENCES Escola(id),
    FOREIGN KEY (idTurma) REFERENCES Turma(id)
);

INSERT INTO Criancas(idAluno, idEscola, idTurma,nome, cpf, dataNascimento, sexo, grauParentesco, celWhatsapp) 
VALUES (1, 1, 1,"Fatima benez", 50652838855,"2005-1-11", "F", "filho", 14991463513);




-- area facilitador

CREATE TABLE Facilitador(
id int not null auto_increment primary key,
idCargo INT,
nome varchar(155),
nomePreferencia varchar(30),
dataNascimento DATE,
estadoCivil varchar(20),
cpf BIGINT,
celWhatsapp BIGINT,
cep INT,
endereço varchar(155),
numero INT,
email varchar(90) UNIQUE,
emailEdf varchar(90) UNIQUE,
senha varchar(150),
ocupacao varchar(40),
uf char(2),
cidade varchar(40),
nomesFilhos varchar(155),
idadefilhos INT,
FOREIGN KEY (idCargo) REFERENCES Cargos(idCargos)
);


-- inserir facilitador
INSERT INTO Facilitador(idCargo ,nome, nomePreferencia, dataNascimento, 
estadoCivil, cpf, celWhatsapp, cep, endereço, numero, 
email, emailEdf, ocupacao, uf, cidade, nomesFilhos, idadeFilhos)
VALUES(2 ,'Paula Maria Rosse', 'Paula', '1995-01-07', 'casada', 25737818834, 14991461215, 17123345
, 'rua dias', 1234, 'paulacavalcante123@gmail.com', 'paula.cavalcanteEDF@edf.com', 'facilitadora', 'SP', 'Pompeia', 'Felipe Cavalcante', 12);


-- area admin

CREATE TABLE Admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idCargo INT,
    email VARCHAR(90) UNIQUE,
    senha VARCHAR(150),
    FOREIGN KEY (idCargo) REFERENCES Cargos(idCargos)
);

INSERT INTO Admins(idCargo, email, senha) VALUES (1, 'adminEDF123@gmail.com', 'senhadeADM');


CREATE TABLE Facilitador_turma(
idTurma INT,
idFacilitador INT,
foreign key (idFacilitador) references Facilitador(id),
foreign key (idTurma) references Turma(id)

);

-- SELECT Turma.*,Escola.Nome_escola FROM Turma Inner join Escola ON Turma.ID_Escola = Escola.ID;
CREATE DATABASE nodejs;

CREATE TABLE studentTable(
    studentID INT PRIMARY KEY NOT NULL,
    studentFirstName VARCHAR(255) NOT NULL,
    studentLastName VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    StudentPassword VARCHAR(255) NOT NULL

);

SELECT * FROM studentTable;

INSERT INTO studentTable(
    studentID, studentFirstName,
    studentLastName, Email,
    StudentPassword
)VALUES(
    2023001, 'Daryll',
    'Culas', 'coolastthereal@gmail.com',
    'IamDaryll99'
);



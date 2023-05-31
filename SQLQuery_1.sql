DROP TABLE IF EXISTS studentTable;
CREATE DATABASE nodejs;



CREATE TABLE studentTable (
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


INSERT INTO studentTable(
    studentID, studentFirstName,
    studentLastName, Email,
    StudentPassword
)VALUES(
    2023002, 'Tanjiro',
    'Kamado', 'tanjirokamado15@gmail.com',
    'demonslayer01'
);

INSERT INTO studentTable(
    studentID, studentFirstName,
    studentLastName, Email,
    StudentPassword
)VALUES(
    2023003, 'Nezuko',
    'Kamado', 'Nezukokamado20@gmail.com',
    'demonslayer02'
);

INSERT INTO studentTable(
    studentID, studentFirstName,
    studentLastName, Email,
    StudentPassword
)VALUES(
    2023004, 'Tengen',
    'Uzui', 'UzuiTengen21@gmail.com',
    'demonslayer03'
);

INSERT INTO studentTable(
    studentID, studentFirstName,
    studentLastName, Email,
    StudentPassword
)VALUES(
    2023005, 'Giyuu',
    'Tomioka', 'GiyuuTomioka23@gmail.com',
    'demonslayer04'
);

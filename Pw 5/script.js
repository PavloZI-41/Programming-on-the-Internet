// Функція для виведення результатів на сторінку
function displayResult(title, matrix1, matrix2, resultMatrix) {
    let outputDiv = document.getElementById('output');
    let resultDiv = document.createElement('div');
    resultDiv.style.marginBottom = '20px';

    let titleElem = document.createElement('h2');
    titleElem.textContent = title;
    resultDiv.appendChild(titleElem);

    resultDiv.innerHTML += "Матриця A:<br>" + matrixToString(matrix1) + "<br>";
    resultDiv.innerHTML += "Матриця B:<br>" + matrixToString(matrix2) + "<br>";
    resultDiv.innerHTML += "Результат (A * B):<br>" + matrixToString(resultMatrix) + "<br>";

    outputDiv.appendChild(resultDiv);
}

// Функція для перетворення матриці в рядок для відображення
function matrixToString(matrix) {
    let result = "";
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            result += matrix[i][j] + " ";
        }
        result += "<br>";
    }
    return result;
}

// Функція множення матриць
function multiplyMatrices(matrixA, matrixB) {
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;
    let colsB = matrixB[0].length;

    if (colsA !== matrixB.length) {
        return "Помилка: Кількість стовпців першої матриці має дорівнювати кількості рядків другої матриці.";
    }

    let resultMatrix = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return resultMatrix;
}

// Тестові дані (Варіант 1 - непарний)
let matrixA_odd = [
    [1, 2, 3],
    [4, 5, 6]
];

let matrixB_odd = [
    [5, 6, 7],
    [7, 8, 9],
    [9, 10, 11]
];

let result_odd = multiplyMatrices(matrixA_odd, matrixB_odd);
displayResult("Множення матриць (Варіант 1 - непарний)", matrixA_odd, matrixB_odd, result_odd);

// Тестові дані (Варіант 2 - парний)
let matrixA_even = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrixB_even = [
    [1, 2],
    [3, 4],
    [5, 6]
];

let result_even = multiplyMatrices(matrixA_even, matrixB_even);
displayResult("Множення матриць (Варіант 2 - парний)", matrixA_even, matrixB_even, result_even);
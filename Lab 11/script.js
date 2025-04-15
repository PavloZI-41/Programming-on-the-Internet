console.log("Лабораторна робота #13: Особливості ініціалізації змінних Javascript");

// Функція для створення та додавання виводу на сторінку
function addOutput(title, content) {
    let outputDiv = document.createElement('div');
    outputDiv.style.marginBottom = '15px'; // Додамо трохи відступу між блоками
    let titleElement = document.createElement('h2');
    titleElement.textContent = title;
    outputDiv.appendChild(titleElement);
    let contentElement = document.createElement('pre'); // Використовуємо <pre> для збереження форматування
    contentElement.textContent = content;
    outputDiv.appendChild(contentElement);
    document.body.appendChild(outputDiv);
}

console.log("Завдання 1: Аналіз hoisting");
//Передбачте результат виконання, потім запустіть код та поясніть в коментарі коментар.
function testHoisting() {
    let result = "";
    result += "До виклику: " + myVar + "\n"; // Оголошена, але ще не ініціалізована
    var myVar = 10;
    result += "Після присвоєння: " + myVar + "\n";
    addOutput("Завдання 1: Аналіз hoisting", result + "\nПояснення: JavaScript піднімає оголошення змінних (з використанням var) на початок області видимості функції. Ініціалізація залишається на місці. Тому перше значення 'undefined', а потім присвоєне значення.");
}

testHoisting();

console.log("\nЗавдання 2: Робота з областю видимості (scope)");
//Передбачте, які змінні будуть доступні після if-блоку. Додайте відповідний коментар.
function testScope() {
    let result = "";
    let localVar = 20;
    if (true) {
        let blockVar = 30;
        var funcVar = 40;
        const constVar = 50;
        result += "В середині if: " + localVar + ", " + blockVar + ", " + funcVar + ", " + constVar + "\n";
    }
    result += "Зовні if: " + localVar + ", " + funcVar + "\n"; // blockVar і constVar недоступні
    addOutput("Завдання 2: Робота з областю видимості (scope)", result + "\nПояснення: Змінні, оголошені за допомогою let і const, мають блокову область видимості (доступні лише всередині if). Змінні, оголошені через var, мають область видимості функції, тому funcVar доступна зовні if.");
}

testScope();

console.log("\nЗавдання 3: Робота з типами даних");
//Передбачте результати виконання коду, запустіть код та поясніть його. Додайте відповідний коментар.
function testDataTypes() {
    let result = "";
    let a = 5;
    let b = "10";
    let c = a + b;
    result += "a + b = " + c + ", " + typeof c + "\n";

    let d = b - a;
    result += "b - a = " + d + ", " + typeof d + "\n";

    let e = b * a;
    result += "b * a = " + e + ", " + typeof e + "\n";
    addOutput("Завдання 3: Робота з типами даних", result + "\nПояснення: При додаванні числової змінної до рядка відбувається конкатенація (з'єднання рядків). Операції віднімання та множення намагаються перетворити рядкові операнди в числа.");
}

testDataTypes();

console.log("\nЗавдання 4: const та об'єкти");
//Передбачте результати виконання коду, запустіть код та поясніть його. Додайте відповідний коментар.
function testConstObject() {
    let result = "";
    const myObject = {
        property1: "hello",
        property2: 123,
    };

    myObject.property1 = "world";
    myObject.property3 = true;

    result += JSON.stringify(myObject, null, 2) + "\n"; // Виводимо об'єкт красиво
    try {
        myObject = { newProperty: "test" }; // Це викличе помилку
    } catch (error) {
        result += "Помилка при спробі переприсвоїти myObject\n";
    }
    addOutput("Завдання 4: const та об'єкти", result + "\nПояснення: const запобігає переприсвоєнню змінної, але не змінює можливість змінювати властивості об'єкта, на який вона посилається.");
}

testConstObject();

console.log("\nЗавдання 5: Визначення типу даних");
//Передбачте результати виконання коду, запустіть код та поясніть його. Додайте відповідний коментар.
function testTypeOf() {
    let result = "";
    let str = "This is a string";
    let num = 10;
    let bool = true;
    let undef = undefined;
    let nul = null;
    let arr = [1, 2, 3];
    let obj = { key: "value" };

    result += "str: " + typeof str + "\n";
    result += "num: " + typeof num + "\n";
    result += "bool: " + typeof bool + "\n";
    result += "undef: " + typeof undef + "\n";
    result += "nul: " + typeof nul + "\n";
    result += "arr: " + typeof arr + "\n";
    result += "obj: " + typeof obj + "\n";
    addOutput("Завдання 5: Визначення типу даних", result + "\nПояснення: typeof повертає тип даних змінної. null є винятком і повертає 'object'. Масиви та об'єкти також мають тип 'object'.");
}

testTypeOf();
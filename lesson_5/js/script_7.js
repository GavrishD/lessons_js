// 0. Значення
// Кількість абзаців від користувача - userNumber

//1. Введення необхідних даних
const userNumber = parseInt(prompt("Кількість абзаців ->"))

//2. Обчислення результату
for (let i = 1; i <= userNumber; i++) {
    document.write(`<h1>Загаловок ${i}</h1>`);
for (let j = 1; j <= userNumber; j++) {
    document.write(`<p>Розділ ${i}, параграф ${j}</p>`);
}

//3. Виведення результату
document.write(`<hr>`);
}
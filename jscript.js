let money = + prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let a1 = prompt("Введите обязательную статью расходов в этом месяце");
let b1 = + prompt("Сколько это будет стоить?");
let a2 = prompt("Введите обязательную статью расходов в этом месяце");
let b2 = + prompt("Сколько это будет стоить?");
appData.expenses[a1] = b1;
appData.expenses[a2] = b2;
let dailyBudget = (appData.budget - appData.expenses[a1] - appData.expenses[a2]) /30;
alert("Бюджет на один день: " + dailyBudget);
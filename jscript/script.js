'use strict';

let money = +prompt("Ваш бюджет за месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optioanExpenses: {},
	income: [],
	saving: false
};

/* for(let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
			b = +prompt("Во сколько обойдется?", "");
	
	if ( (typeof(a)) === 'string' && (typeof(a)) != 'null' 
			&& (typeof(a)) != 'null' && a != '' && b != '' && a.length < 50) {

		console.log ("done");
		appData.expenses[a] = b;
	} else {
		console.log ("bad");
		i--;
	}
	
} */

/* let i = 0;
while (i < 2) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
			b = +prompt("Во сколько обойдется?", "");
	
	if ( (typeof(a)) === 'string' && (typeof(a)) != 'null' 
			&& (typeof(a)) != 'null' && a != '' && b != '' && a.length < 50) {

		console.log ("done");
		appData.expenses[a] = b;
	} else {
		console.log ("bad");
		i--;
	}
	i++;
} */


let i = 0;
do {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
			b = +prompt("Во сколько обойдется?", "");
	
	if ( (typeof(a)) === 'string' && (typeof(a)) != 'null' 
			&& (typeof(a)) != 'null' && a != '' && b != '' && a.length < 50) {

		console.log ("done");
		appData.expenses[a] = b;
	} else {
		console.log ("bad");
		i--;
	}
	i++;
} while (i < 2);


appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000){
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка");
}

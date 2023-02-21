'use strict';
let money, time; //обьявляем переменные глобальными для удобства

function start() {//Заворачиваем в функцию для того, чтобы код дальше не пошел, пока не выполнат первые условия
    money = +prompt("Ваш бюджет на месяц?", '');// при prompt мы постоянно получаем строку, но для корректности нам нужно число, по этому стаавим унарный +, чтобы поменять значение
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money =="" || money == null) {//определяет является ли литерал или переменная нечисловым значением (NaN) или нет. 
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true, //Чтобы заработала сумма накоплений
    chooseExpenses: function() {//Функции теперь являются методами объекта appData
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
            
            if ( ( typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
                && a != '' && b != '' && a.length < 50 ) {
                console.log("done");//Тут указаны условия заполнения строк, то есть максимальная длина, что нельзя оставлять пустыми строки, установили условие, чтобы отмена не проходила, так как отмена равняется null
               appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        };
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        detectDayBudget = appData.moneyPerDay;
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        }else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        }else {
            console.log("Ошибка");
        };
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой %?");
    
            appData.monthhIncome = save/100/12*percent;
            alert("Доход в месяц: " + appData.monthhIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов?", ''),
                b = prompt("Во сколько обойдется?", '');
            
            if ( ( typeof(a)) === 'string' && a.length < 50 ) {
                console.log("done");//Тут указаны условия заполнения строк, то есть максимальная длина, что нельзя оставлять пустыми строки, установили условие, чтобы отмена не проходила, так как отмена равняется null
               appData.expenses[a] = b;
            } else {
                i = i - 1;
            }   
        };
    },
    //chooseIncome: function() {
    //    let items = prompt('Что приносит дополнительный доход? (Перечислите черз запятую)', '');
    //    while (!isNaN(items)){
    //        items = prompt('Что приносит дополнительный доход? (Перечислите черз запятую)', '');
    //    }
    //    appData.income = items.split(', ');//Чтобы строка превратилась в массив
    //    appData.income.push(prompt('Может что-то еще?'));//Это на всякий случай, вдруг что-то забыли, пусть внесется это в конец массива
    //    appData.income.sort();//Сортировка по алфавиту
    //}
};

function chooseIncome() {
    for (let i = 0; i < 1; i++) {
        let items = prompt('Что принесет вам дополнительный доход (Перечислите через запятую)?', '');
  
        if ((typeof (items)) === 'string' && items != '' && (typeof (items)) != null) {
          appData.income = items.split(', ');
          appData.income.push(prompt('Что может что-то еще?'));
          appData.income.sort();
          appData.income.forEach(function (item, i, income) {
            let n = 0; n = i + 1;
            console.log(n + ' - Способ доп. заработка: ' + item);
          });
        } else {
          i--;
        }
      }
    };

chooseIncome();

for (let key in appData) {
    console.log('Наша программа включает в себя данные:' + key + ': ' + appData[key]);
  };
//chooseExpenses();//Вызываем ее, чтобы пользователь мог воспользоваться ею

//let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
//    a2 = prompt("Во сколько обойдется?", ''),
//    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
//    a4 = prompt("Во сколько обойдется?", '');
//
//appData.expenses.a1 = a2;
//appData.expenses.a3 = a4;

//Это можно записать в виде цикла для удобства, за тем, мы сделаем так, чтобы в блоки можно было писать только определенную, нужную информацию
//for (let i = 0; i < 2; i++) {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//        b = prompt("Во сколько обойдется?", '');
//    
//    if ( ( typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//        && a != '' && b != '' && a.length < 50 ) {
//        console.log("done");//Тут указаны условия заполнения строк, то есть максимальная длина, что нельзя оставлять пустыми строки, установили условие, чтобы отмена не проходила, так как отмена равняется null
//       appData.expenses[a] = b;
//    } else {
//        i = i - 1;
//    }
//};


//Способо решения цикла через While
//let i = 0;
//
//while (i < 2) {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//        b = prompt("Во сколько обойдется?", '');
//    console.log("done");//Тут указаны условия заполнения строк, то есть максимальная длина, что нельзя оставлять пустыми строки, установили условие, чтобы отмена не проходила, так как отмена равняется null
//    appData.expenses[a] = b;
//    i++;
//            
//};

//Способо решения цикла через Do...while
//let i = 0;
//
//do {
//    i++;
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//        b = prompt("Во сколько обойдется?", '');
//    console.log("done");//Тут указаны условия заполнения строк, то есть максимальная длина, что нельзя оставлять пустыми строки, установили условие, чтобы отмена не проходила, так как отмена равняется null
//    appData.expenses[a] = b;
//    
//}while (i < 2);


//function detectDayBudget() {
//    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
//    detectDayBudget = appData.moneyPerDay;
//}
//detectDayBudget();
//appData.moneyPerDay = (appData.budget / 30).toFixed(1);//Не забываем, что tofixed меняет переменную, он возвращает строковую переменную, но в данном случае это не важно, но необходимо ориентироваться в типах данных

//alert("Ежедневный бюджет:" + detectDayBudget);



//if(appData.moneyPerDay < 100) {
//    console.log("Минимальный уровень достатка");
//}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//    console.log("Средний уровень достатка");
//}else if (appData.moneyPerDay > 2000) {
//    console.log("Высокий уровень достатка");
//}else {
//    console.log("Ошибка");
//};

//function detectLevel() {
//    if(appData.moneyPerDay < 100) {
//        console.log("Минимальный уровень достатка");
//    }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//        console.log("Средний уровень достатка");
//    }else if (appData.moneyPerDay > 2000) {
//        console.log("Высокий уровень достатка");
//    }else {
//        console.log("Ошибка");
//    };
//}



//function checkSavings() {
//    if (appData.savings == true) {
//        let save = +prompt("Какова сумма накоплений?"),
//            percent = +prompt("Под какой %?");
//
//        appData.monthhIncome = save/100/12*percent;
//        alert("Доход в месяц: " + appData.monthhIncome);
//    }
//}
//checkSavings();

//function chooseOptExpenses() {
//    for (let i = 0; i < 3; i++) {
//        let a = prompt("Статья необязательных расходов?", ''),
//            b = prompt("Во сколько обойдется?", '');
//        
//        if ( ( typeof(a)) === 'string' && a.length < 50 ) {
//            console.log("done");//Тут указаны условия заполнения строк, то есть максимальная длина, что нельзя оставлять пустыми строки, установили условие, чтобы отмена не проходила, так как отмена равняется null
//           appData.expenses[a] = b;
//        } else {
//            i = i - 1;
//        }   
//    };      
//}
//chooseOptExpenses();

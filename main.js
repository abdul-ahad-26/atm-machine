#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["fast cash", "cash withdrawal", "check balance"]
        }
    ]);
    if (operationAns.operation === "fast cash") { // Fast cash
        let fastCashAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Please select amount",
                type: "list",
                choices: [500, 1000, 5000]
            }
        ]);
        switch (fastCashAns.amount) {
            case 500:
                myBalance -= 500;
                break;
            case 1000:
                myBalance -= 1000;
                break;
            case 5000:
                myBalance -= 5000;
        }
        console.log(`Transaction sucessful \nYour remaining balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "cash withdrawal") { //cash withdrawal
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) { //insufficient amount
            console.log("Insufficient amount");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") { //check balance
        console.log(`Your balance is ${myBalance}`);
    }
}
else {
    console.log("Wrong pin code");
}

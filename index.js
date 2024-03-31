import inquirer from "inquirer";
let myBalance = 10000; //dollar
let myPin = 4455;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("your balance is: " + myBalance);
    let oprationAns = await inquirer.prompt([
        {
            name: "opration",
            message: "please salect one option",
            type: "list",
            choices: ["withdraw", "check balance"]
        },
    ]);
    if (oprationAns.opration === "withdraw") {
        let ammountAns = await inquirer.prompt([
            {
                name: "ammount",
                message: "enter your ammount",
                type: "number",
            },
        ]);
        myBalance -= ammountAns.ammount;
        console.log("your current balance is:" + "  " + myBalance);
    }
    else if (oprationAns.opration === "check balance") {
        let A = "you balance is";
        console.log(`${A} ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}

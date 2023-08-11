import inquirer from "inquirer";

let ans = await inquirer.prompt([
  {
    type: "number",
    name: "firstNum",
    message: "Enter your first number",
  },
  {
    type: "number",
    name: "secondNum",
    message: "Enter your second number",
  },
  {
    type: "list",
    name: "sign",
    message: "method",
    choices: ["+", "-", "/", "*"],
  },
]);

if (ans.sign == "+") {
  console.log(ans.firstNum + ans.secondNum);
}
if (ans.sign == "-") {
  console.log(ans.firstNum - ans.secondNum);
}
if (ans.sign == "/") {
  console.log(ans.firstNum / ans.secondNum);
}
if (ans.sign == "*") {
  console.log(ans.firstNum * ans.secondNum);
}
console.log();

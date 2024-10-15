// Brooke is trying to save enough money in the next fifteen months to purchase a plane ticket to Australia. Every month Brooke saves $150. Write a for loop that displays how much money Brooke will have saved at the end of each month for the next 15 months.

let monthlyDeposit = 150;
let accountBalance = 0;

for (let i = 0; i < 15; i++) {
  accountBalance += monthlyDeposit;
  console.log(accountBalance);
}

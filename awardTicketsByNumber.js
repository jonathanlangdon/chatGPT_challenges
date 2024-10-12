// Write an if-else statement that if userTickets is less than or equal to 5, executes awardPoints = 10. Else, execute awardPoints = userTickets. Ex: If userTickets is 4, then awardPoints = 10.

let awardPoints = 0;
let userTickets = 4;
awardPoints = userTickets <= 5 ? 10 : userTickets;
console.log(awardPoints); // 10

awardPoints = 0;
userTickets = 5;
awardPoints = userTickets <= 5 ? 10 : userTickets;
console.log(awardPoints); // 10

awardPoints = 0;
userTickets = 6;
awardPoints = userTickets <= 5 ? 10 : userTickets;
console.log(awardPoints); // 6

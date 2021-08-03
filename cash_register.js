function checkCashRegister(price, cash, cid) {
  const currency ={"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100};
  let totalAmount = 0;
  for (let element of cid) {
    totalAmount += element[1];
  }
  totalAmount = totalAmount.toFixed(2);
  let giveChange = cash - price;
  const changeArr = [];
  if (giveChange>totalAmount){
    return {status: "INSUFFICIENT_FUNDS", change : changeArr}; 
  } else if (giveChange.toFixed(2) === totalAmount) {
      return {status : "CLOSED", change : cid}; 
  } else {
      cid = cid.reverse();
      for (let i of cid){
        let x = [i[0], 0];
        while (giveChange >= currency[i[0]] && i[1] > 0) {
          x[1] += currency[i[0]];
          i[1] -= currency[i[0]];
          giveChange -= currency[i[0]];
          giveChange = giveChange.toFixed(2);
        }

         if (x[1] > 0) {
            changeArr.push(x);
         }
      }
  }
  if (giveChange > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
    return { status: "OPEN", change: changeArr};
          
};

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
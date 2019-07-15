function sum(interest){
    let interestRate = interest[1] / 100;
    let compoundingPeriod = 12 / interest[2];
    let formula = interest[0]*(1 + interestRate / compoundingPeriod)**(compoundingPeriod * interest[3]);
    
    return formula;
}


console.log(sum[1500, 4.3, 3, 6]);
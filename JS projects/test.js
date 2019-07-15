function grads(gon){
    let remains = gon % 400;
    
    let degrees = (360 * remains) / 400; 
    if(degrees < 0){
        return 360 + degrees;
    }
    else{
        return degrees;
    }
    
}

console.log(grads(-50));

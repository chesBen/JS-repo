function triangle(input){
    let ch = '';
    for (let i = 1; i <= input; i++) {
         
        for (let j = 1; j <= i ; j++) {
            ch += '$';
            
        }
        console.log(ch);
        ch = '';
    }
                                         
}

triangle(3);
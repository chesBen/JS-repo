function rectangle(points){
    let x = points[0];
    let y = points[1];
    let xMin = points[2];
    let xMax = points[3];
    let yMin = points[4];
    let yMax = points[5];

    if(x >= xMin && x <= xMax && y >= yMin && y <= yMax){
        console.log('inside');
    }
    else{
        console.log('outside');
    }
}

rectangle([8, -1, 2, 12, -3, 3]);
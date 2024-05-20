let calculateArea = (shape, width, height, exclude) =>{
    let area = 0;
    
    if(shape != "triangle" && shape!="rectangle"){
        return (NaN);
    }
    else if (shape == "triangle"){
        area = 1/2 * width * height
    }
    else{
        area = width * height
    }
    return (area-exclude);
}

module.exports = { calculateArea };

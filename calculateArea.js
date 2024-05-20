let calculateArea = (shape, width, height, exclude) =>{
    let area = 0;
    if (shape == "triangle"){
        area = 1/2 * width * height
    }else{
        area = width * height
    }
    return (area-exclude);
}
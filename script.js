function calculate(){
    var bmi;
    var category
    var result = document.getElementById("result");
    var category = document.getElementById("category");
    var weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-val").textContent = weight +"kg"; 
    
    var height = parseInt(document.getElementById("height").value);
    document.getElementById("height-val").textContent = height + "cm";
    
    bmi = (weight / Math.pow((height/100),2)).toFixed(1);
    result.textContent = bmi;

    if(bmi < 18.5){
        category = "UnderWeight";
        result.style.color = "#FFFF00";    
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        category = "NormalWeight";
        result.style.color = "#00FF00";  
    }
    else if(bmi >= 25 && bmi <= 29.9){
        category = "OverWeight";
        result.style.color = "#FFA500";  
    }
    else{
        category = "Obese";
        result.style.color = "#FF0000";  
    }
    document.getElementById("category").textContent = category;
}   

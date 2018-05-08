$(document).ready(function(){
    console.log("Web ready");
    var variable1 = "uno";
    
    console.log("variable1");
    var variable2 = "dos";
    
        console.log("variable2");
    if( variable1 == variable2){
     console.log("Son iguales");   
    }else{
     console.log("No son iguales");   
    }
    
    var cars = ["Audi","Ford","Mustang","Ferrari","Porsche"];
    
    for(i=0;i<cars.length;i++){
    console.log(cars[i]);
    }
});
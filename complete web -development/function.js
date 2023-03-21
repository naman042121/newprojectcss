
//create function

function fun(rent){

    console.log(rent+ "this is for rent");
}
let rent= "house";
let rent1 = "car";
let rent2= "bike";

fun(rent);
fun(rent1);
fun(rent2);

//add text on function
function fun(car,cartext){
    console.log(cartext+""+car);
    console.log(car+ "this is for rent");
}
let car= "honda";
let car1 = "audi";
let car2= "bmw";
let cartext ="this is new";

fun(car,cartext);
fun(car1,cartext);
fun(car2,cartext);

//function msg button
function msg(){
    alert("hello this is messages");
    
}
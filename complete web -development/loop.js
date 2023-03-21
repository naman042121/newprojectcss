//for

let city = ["bhilai","raipur","durg","dhamtari","dhamdha"];
for (let index = 0; index < city.length; index++) {
    console.log("clean city," + city[index]);
    
}

//Foreach loop

// city.forEach(function f(element){
//     console.log("clean city green city" + element +" in chhatisgerh")
// }); 

//for element of friends

for(element of city){
    console.log("clean city green city" + element +" in chhatisgerh");
}



let box = [40,20,30,25,35]
let sum = 0;
for(let i = 0; i < box.length; i++)

{
    sum += box[i];
}
console.log("sum is "+sum)

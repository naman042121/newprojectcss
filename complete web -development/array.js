// num1= 30;
// num2= 20;
// if (num1>num2){
//     console.log("num1 is big")
// }
// else if(num2>num1)
// {
//     console.log("num2 is big")
// }
// else{
//     console.log("you are wrong")
// }

// arrey and object
//example1
// object start
    let employee = {
        name:"java code",
        salary: 10000,
        channel1: "code with java",
        channel2: "code in c++",
    }
    console.log(employee)

let company1 = {
    name:"true programmer",
    revenue:"1 crore per anume",
    employee: 1000,
    salary: 40000,
}
console.log(company1)

//lets try array
//example2
//we can print any array element is  present in the list from to call its  index number

let role1 = [41,1, "naman","bhilai",491001];

let role2 = [2, "rahul","raipur",492002];
console.log(role1.length);

 console.log(role1[2],role2[2])
 
//exemple3
//array sorting
 let box = [41,21,31,900,"naman","rahul"]
console.log(box)
box = box.sort();

//push method
//example4
box.push("this is end")

// example5
//create array with size
let newarray = new Array(40);

let dailyActivities = ['eat', 'sleep'];

//example6
//add an element at the start
dailyActivities.unshift('work'); 

console.log(dailyActivities); // ['work', 'eat', 'sleep']

// pop element in array
//example7
let boxpop = ["eat","sleep","and","repeat"];

boxpop.pop();
console.log(boxpop);

const removeelement = boxpop.pop();
console.log(removeelement);
console.log(boxpop);

//example8
let newarray1 = ['monday','tuesday','wednesday','thursday','friday']    
let newarray2 = ["saturday","sunday"]

// sorting array in alphabetic order
newarray1.sort();
console.log(newarray1);

//find position 

const position = newarray1.indexOf('friday');
console.log(position);

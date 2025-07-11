  // && / ||
let a = false; 
let b = true; 
console.log(a||b);

//template litral: 

const name1 = "Sushmitha"; 
const name2 = "Panthagaani"; 
console.log(`My full name is ${name1} ${name2}`); 

//Ternary operator: 
const ShowRecipe = true; 
function firstRecipe(one){
    return one
}
function secondRecipe(two){
    return two
}

//older way of comparing and returning values based on the conditions
if(ShowRecipe){
    console.log(firstRecipe('Biriyani!!'))
}
else{
    console.log(secondRecipe('FriedRice!!'))
}
//using Ternory operator
const res = ShowRecipe ? firstRecipe("Biriyani with chicken 65") : secondRecipe("Chicken FriedRice"); 
console.log(res); 

//destructuring in objects: 

const person1 = {
    fname: "Sushmitha", 
    lname: "Panthagaani", 
    age: 22, 
    job: "Web Developer"
}
const person2 = {
    fname: "Ayesha", 
    lname: "Shakes", 
    age: 23, 
}
console.log(person2.age)

const {fname,lname,age,job} = person1; 
console.log(fname,lname,age,job);

function display({fname,lname,age}){
    console.log(fname,lname,age)
}
display(person2); 

//Array Destructuring
const colors = ['white', 'blue','red','orange','black'];
//old way : 
console.log(colors[0],colors[1],colors[2]);

//array des: 
[val1,val2,val3] = colors; 
console.log(val1,val2,val3)

// ====================================================

//default parameters = takes default parameter values if we didn't pass the arguments 
function add(num1=2,num2=2){
    console.log(num1*num2)
}
add(9);

//spread operator = by using ... (3 dots) we can use the 
const array1 = [1,2,3,4,5]; 
const array2 = [...array1,6,7,8,9,10]
console.log(32,3000,...array2,400);


//rest operators = collects remaining arguments as an array, works in function parameters only 
function show(a,b, ...things){
console.log(a,b,things)
}
show(1,2,3,4,5,6); 

function sum(...numbers){
    return  numbers.reduce((acc,curr) => acc + curr) 
}
const result = sum(1,23,6); 
console.log(result); 

//=======================================
//Array Methods: 

//1.map() 
let num = [2,3,4,5,6,7,8,10]; 
const results = num.map(x=>x*x); 
console.log(results);

const personArray = [
    {
        name: "Person 01", 
        age: 13, 
        country: "USA"
    },
    {
        name: "Person 1", 
        age: 23, 
        country: "USA"
    },
    {
        name: "Person 2", 
        age: 24, 
        country: "UK"
    },
    {
        name: "Person 3", 
        age: 25, 
        country: "Russia"
    },
]
//map()
const personName = personArray.map(singlePer => singlePer.name); 
console.log(personName); 

//find() - work based on the condiiton and returns the first occurance which satisfy the condition
const personFromUSA = personArray.find(singlePer => singlePer.country === "USA"); 
console.log(personFromUSA);

//filter() - returns all the occurance which satisfy the condition
const personFromUSAs = personArray.filter(singlePer => singlePer.country === "USA"); 
console.log(personFromUSAs);

//some() - returns true if any satisfy the condition
//every() - returns true is every statement satisfy the condition

const above20Some = personArray.some(singlePer => singlePer.age > 20)
console.log(above20Some)

const above20 = personArray.every(singlePer => singlePer.age > 20)
console.log(above20)

//includes() - retuns true/false if the value is exsisitng 
//indexOf() - retun the index number of the specified value, if the val doesn't exsists returns -1
const colors1 = ['white', 'blue','red','orange','black'];
const blueColor = colors1.includes('blue'); 
console.log(blueColor, colors1.indexOf("sush")); 

//findIndex() = work based on the condition if true will return the index else returns -1

const indexOfRussia = personArray.findIndex(singlePerson => singlePerson.country === "Russia"); 
console.log(indexOfRussia)

// ASYNC/AWAIT:  

const listElement = document.getElementById('listof-products'); 

function renderProducts(getProducts){
  listElement.innerHTML = getProducts
  .map(items => `${items.title}<br>`).join(" ")
 

}
async function listOfProducts(){
    try{
     const res = await fetch('https://dummyjson.com/products'); 
     const data = await res.json(); 
     console.log(data)

    //  if(data?.products?.length > 0){              //?. prevents that error by safely checking if the object exists before trying to 
    //   renderProducts(data.products)                access its property. If something in the chain is undefined or null, the entire expression 
    //                                                returns undefined instead of throwing an error.
    //     
    //  }
    if(data.products.length > 0){
        renderProducts(data.products)
    }
    }
    catch(e){
        console.log(e)
    }
}
listOfProducts()







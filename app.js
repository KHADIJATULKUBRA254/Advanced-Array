//Array methods
//store multiple values in the form of list in single variable

// const array = [1, 2, 3, 4, 5]
// array.push(6)
// array.pop()  //no need to give values in parenthesis last s hi value delete hogi 
// array.shift() //start s delete krta h 
// array.unshift("apple") //start m add krta h 
// console.log(array);
//-----------------------------------------------------------------------------------

// function sum (a){
//     return a
// }
// const result = sum(2);
// console.log(result);

//-------------------------------array.map---------------------------------------------------

// //builtin method (array k elements ajaengy 0-5)
// //array ko apni marzi s modify karyn
// //map new array provide krta h
// const array = [1,2,3,4,5]
// const newArr = array.map(function(item){
//     return item *2;

// }) 
// console.log(newArr);
//------------------------------array.forEach------------------------------------------------------


// //foreach (elements p loop chalata h na hi new array provide kry ga)
//foreach ka return undefined hota h builtin
// const array = [1, 2, 3, 4, 5]
// const newArr =  array.forEach(function(item){

//     return item;
// })

// console.log(newArr); //undefined

//--------------------------------------array.forEach----------------------------------------------

// const array = [1, 2, 3, 4, 5]
// const newArr =  array.forEach(function(item, i ,arr){

//     console.log(item, i ,arr);
// })
//---------------------------------------array.filter---------------------------------------------

// //filter bhi new array provide krta h 
// //array ko filter krta h 
// const array = [1, 2, 3, 4, 5]
// const newArr = array.filter(function(item){
//      return item < 10 ;
// });

// console.log(newArr);

//------------------------------------------------------------------------------------
const users = [
    { name: "Khadija-Tul-Kubra", occupation: "Website Developer", profileimg: "https://images.unsplash.com/photo-1734365294784-00255163b97d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: "Iqra Mahjabeen", occupation: "Data Analyst", profileimg: "https://images.unsplash.com/photo-1702592420391-f3a67f4067f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8"},
    { name: "Dua Khan", occupation: "UI/UX", profileimg: "https://images.unsplash.com/photo-1735424080768-8730f9c8a0e9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: "Ayesha Noor", occupation: "Project Manager", profileimg: "https://images.unsplash.com/photo-1732734042420-1fa41185ad56?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: "Ayesha Sabir", occupation: "Business Analyst", profileimg: "https://images.unsplash.com/photo-1675663345944-9440812025c3?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

];

function getusers (){
    const main = document.getElementById("main");

    setTimeout(()=>{

        users.forEach(function(item){
            const div = document.createElement("div");
            div.classList.add("user");
            main.append(div);
    
            const img = document.createElement("img");
            img.classList.add("img");
            img.src = item.profileimg;
            div.append(img);
    
            const div2 = document.createElement("div");
            const p = `<p class= "p-1">${item.name}</p>
            <p class= "p-2">${item.occupation}</p>`
    
            div2.innerHTML = p 
            div.append(div2)
        });
    
    
    

    
    document.getElementById("loader").innerHTML=""},2000);
}

getusers()

//append multiple items
//setimeout method (function leta h aur time k input deny par utny hi time baad output show hota h)


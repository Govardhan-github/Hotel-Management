const Customer = require('./Customer');
let prompt = require('prompt-sync')();
const fs = require('fs');
let registraionArr = new Array();
let itemsArr = new Array();

//Customer Registration
let register =()=>{
    let name =prompt("Enter Name : "); 
    let gender = prompt("Enter Gender : ")
    let address =prompt("Enter Address : ");
    let phoneNumber =prompt("Enter Phone Number : ");
    let email =prompt("Enter Email : ");
    let numOfDays = prompt("How Many Number Of Days you Stay : ")
    let joinDate = Date();
    let customerlist = null;
   
    customerlist = new Customer(name,gender,address,phoneNumber,email,joinDate,numOfDays);
return customerlist;
};

//Adding Customer
let adduser = (Customer)=>{
    registraionArr.push(Customer);
    console.log("Registered Successfully..Login With Key" );
    key();
}
let key =()=>{
    let k = registraionArr.flatMap(Customer=>Customer._phoneNumber);
    console.log("Your Key Is : " +k);
}

function login(){
    const USERKEY = 1;
    const ADMINKEY =2; 
    console.log("Login As\n1.User \n2.Admin");
    let loginKey = prompt('Enter Login Key : ');
    if(USERKEY==loginKey){
        viewCustomer();
        userLogin(); 
    }
    if(ADMINKEY==loginKey){
        adminLogin();
    }
}

function userLogin(){
    const phNumber = registraionArr.flatMap(Customer=>Customer._phoneNumber);
    const userkey =prompt("Enter Your Key : ");
    if(userkey==phNumber){
        const k = registraionArr.flatMap(Customer=>Customer._joinDate)
        console.log("You Checked In At : "+k);
        console.log("Choose\n1.Order Food\n2.");
        const choose = prompt("Choose");
        if(choose==1){
            console.log("The Food List Is : \n1.Break Fast \n2.Lunch \n3.Dinner");
            if(order==1){
                breakFast();
            }
            if(order==2){
                lunch();
            }
            if(order==3){
                Dinner();
            }
        }
    }
}

function breakFast(){
    let totalbill =[];
    console.log("Items Are : \n1.Idly--->Rs.40\n2.Dosha--->Rs.55");
    const Idly = 40;
    const Dosha =70;
    console.log(Idly);
    let itemList = ["idly","dosha","vegMeals","curdRice","biryani"]
    let itemCost = [40,60,120,60,240]
   for(let i =0;i<itemCost.length;i++){
       if(l==itemCost[i]){
           console.log(itemCost[i]);

       }
   }
}
function calculateBill(cost,n){
    return cost * n;

}


//To View Customer
let viewCustomer = () =>{
    registraionArr.forEach(Customer => console.log(Customer.toString()))
}
//To Store Data in Json
let json =() => {
    registraionArr.forEach(Customer=>{
        const finished = (error) =>{
            if(error)
                console.error(error);
                return;
        }
        let e = JSON.stringify(Customer);
        console.log(e);
        fs.writeFile("./User.json" ,e,finished)
    });
}

//To Order Food
function food(){
    let n = prompt('Enter Your Name : ')
    let a = registraionArr.flatMap(Customer=>Customer._name);
    if(n==a){
        console.log("Choose\n1.Break Fast Items\n2.Lunch Items\n3.Dinner Items");    
        let type = prompt("Enter type : ")
        if(type==1){
            console.log("The Break Fast Items :\n 1.Idly Price----->Rs.40 \n2.Dosha Price----->Rs.60");
            let Bf = prompt("Choose : ");
            if(Bf==1 || Bf ==2){
                itemsArr.push(Items);
            }
        }else if(type==2){
            console.log("The Lunch  Items :\n 1.Veg Meals-----> Rs.100\n 2.Curd Rice-----> Rs.70");
        }else if(type==3){
        console.log("The Dinner  Items :\n 1.Chicken Biryani-----> Rs.240\n 2.Mutton Biryani----->Rs.320");
        }
    }else{
        console.log("Invalid Name Please Enter Valid Name");
    }
 }

viewItems=()=>{
    itemsArr.forEach(items=>console.log(items.toString()))
}


console.log("-------------WELCOME TO SJGN HOTEL---------------------");
const TOREGISTER =1;
const TOLOGIN = 2;
console.log("If You Are Not Register Then Enetr 1 For Register");
console.log("If You Are Registered Then Enter 2 For Login");
let user = prompt("Choose Option : ")
if(TOREGISTER==user){
let option =0;
do{
    console.log("Choose\n1.For Registration\n2.For Login");
    //console.log("Choose\n1.For Registration\n2.View Customers\n3.To Save Data In Json File\n4.Food Order\n5.Items")
     option = prompt("Enter Option : ");
    switch(option){
        case "1": 
            console.log("Eneter Your Details");
            adduser(register());
            break;
        case "2": login();
            break;    
        case "3" : json(Customer);
            break;    
        }
}while(option!=6)
}
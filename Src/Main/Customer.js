class Customer{
    constructor(...params) {
        this.name = params[0];
        this.gender = params[1]
        this.address = params[2];
        this.phoneNumber = params[3];
        this.email = params[4];
        this.joinDate = params[5];
        this.numOfDays = params[6];
    }
    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex = RegExp("^[A-z]{1}[a-z]{2,}$");
        if(nameRegex.test(name)){
            this._name= name;
        }else throw  "Invalid User Name";
    }
    get gender(){
        return this._gender;  
    }
    set gender(gender){
       // const genderRegex = RegExp("{M} {F}")
        //if(genderRegex.test(gender)){
            this._gender = gender;
        //}else throw "Invalid!!"
    }
    get address(){
        return this._address;
    }
    set address(address){
        this._address= address;
    }
    get phoneNumber(){
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp("^[6-9]{1}[0-9]{9}");
        if(phoneRegex.test(phoneNumber)){
            this._phoneNumber= phoneNumber;
        }else{
            throw "Invalid Phone Number";
        }
    }
    get email(){
        return this._email;
    }
    set email(email){
        let emailRegex = RegExp("^[A-z]{1}[a-z]{2,}");
        if(emailRegex.test(email)){
            this._email= email;
        }else{
            throw "Invalid User email";
        }
    }
    get joinDate(){
        return this._joinDate;
    }
    set joinDate(joinDate){
        this._joinDate = Date();
    }
    get numOfDays(){
        return this._numOfDays;
    }
    set numOfDays(numOfDays){
        this._numOfDays=numOfDays;
    }
   
    toString(){
        return "name : " + this.name +"\ngender"+this.gender+ "\naddress : " + this.address + "\nPhoneNumber : " + this.phoneNumber +"\nEmail : " +this.email + "\nJoin Date :" +this.joinDate +"\nnumofDays : "+this.numOfDays ;      
    } 
}
// }
// class Items{
//     Constructor(...params){
//         this.idly= params[0];
//         this.dosha= params[1];
//         this.vegMeals= params[2];
//         this.curdRice= params[3];
//         this.chickenBiryani= params[4];
//         this.muttonBiryani= params[5];
//     }

// }
module.exports = Customer;

// let option =0;
// do{
//     console.log("Choose\n1.For Registration\n2.View Customers\n3.To Save Data In Json File\n4.Food Order\n5.Items")
//     option =prompt("Enter Option : ");
//     switch(option){
//         case "1": 
//             adduser(register());

//             break;
//         case "2": viewCustomer();
//             break;    
//         case "3" : json(Customer);
//             break;    
//         case "4" :food() ;
//             break; 
//         case "4" :food() ;
//             break;       
//         case "5" :viewItems() ;
//             break; 
//         }
// }while(option!=6)

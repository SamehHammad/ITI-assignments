class Account{
    acc_no:Number;
    balance:Number;
 
        constructor(acc_no,balance){
            this.acc_no = acc_no;
            this.balance = balance;
        }
     
        get_balance(){
            return this.balance;
        }

}
    
interface Acccount{
    Date_of_opening: Number;
    
    addCustomer();
    removeCustomer();
}
class Current_Account extends Account implements Acccount {
    Date_of_opening: Number;
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
 
}
class Saving_Account extends Account implements Acccount {
    Min_Balance:Number;
    Date_of_opening: Number;
    addCustomer() {
        // throw new Error("Method not implemented.");
    }
    removeCustomer() {
        // throw new Error("Method not implemented.");
    }
}
    


// let x: number = 20;
// x = 3;
// // x = 'sddd'; ERROR
// let z: number = 20;
// z = 3;
// // z = 'sddd'; ERROR
// let a: any;
// a = 22;
// a = "dldll";
// a = false;
// //(any) accepted any data type
// let aaa: number | string;
// aaa = 22;
// aaa = "sss";
// // aaa = false; ERROR
// console.log(aaa, a, z, x);
// //abstract and interace not founded in js
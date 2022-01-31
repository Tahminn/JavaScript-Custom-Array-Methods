let account1 = {
    id: 1,
    username: "tahmin",
    password: "tahmin123"
}

let account2 = {
    id: 2,
    username: "emin",
    password: "emin123"
}

let account3 = {
    id: 3,
    username: "nur",
    password: "nur123"
}
let account4 = {
    id: 4,
    username: "aylin",
    password: "aylin123"
}

let account5 = {
    id: 5,
    username: "cavad123",
    password: "cavad123"
}

class myArray {
    constructor(...accounts) {
        this.accounts = accounts;
        this.length = length;
    }
    customPush(account) {
        if(this.length < 0){
            this.length = -1;
        }
            this.length++;
            return this.accounts[this.length] = account;
    }    
    customFind(id) {
            if (id == this.accounts.id) {
                return "Already exist";
            }else{
                return "not found";
            }
        
    }
}
let accountsArray = new myArray();
accountsArray.customPush(account1);
accountsArray.customPush(account2);
accountsArray.customPush(account3);
accountsArray.customPush(account4);
accountsArray.customPush(account5);

console.log(accountsArray.customFind(6));

console.log(accountsArray);

// accountArray.prototype.customPush = function(account)


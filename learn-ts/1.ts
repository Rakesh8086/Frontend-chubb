interface User{
    name:string;
    age:number;
}

class Account{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    printName():string{
        return this.name;
    }
    printAge():number{
        return this.age;
    }
}

const u1: Account = new Account("AA", 20);
console.log(u1.printName());
console.log(u1.printAge());
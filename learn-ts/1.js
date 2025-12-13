var Account = /** @class */ (function () {
    function Account(name, age) {
        this.name = name;
        this.age = age;
    }
    Account.prototype.printName = function () {
        return this.name;
    };
    Account.prototype.printAge = function () {
        return this.age;
    };
    return Account;
}());
var u1 = new Account("AA", 20);
console.log(u1.printName());
console.log(u1.printAge());

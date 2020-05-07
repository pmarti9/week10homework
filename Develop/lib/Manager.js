// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
};
Manager.prototype.getRole = function(){
    return "Manager";
};
Manager.prototype.getOffice = function(){
    return this.officeNumber;
};
module.exports = Manager;
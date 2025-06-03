const jonas = {
firstName: 'suramethar',
lastName: 'chantarasmee',
birthYeah: 2037 - 1991,
job: 'teacher',
friends: ['Michael', 'Peter', 'Steven'],
driverLicense: true,

calAge: function() {
    this.age = 2037 - this.birthYeah
    return this.age
},

getSummary: function () {
    return `${this.firstName} is a ${this.calAge()}, and he has ${this.driverLicense ? 'a' : 'no'} driver's license`;
}

};

console.log(jonas.getSummary())

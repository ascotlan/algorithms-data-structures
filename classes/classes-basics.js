class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate(){ //instance method called on an instance of the class
    this.tardies += 1;
    if(this.tardies >= 3){
      return "YOU ARE EXPELLED!"
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
  }

  static EnrollStudents(){
    return "ENROLLING STUDENTS!"
  }
}

let student1 = new Student("Emil", "Katz", 3);

console.log(student1.firstName);
console.log(student1.fullName());
console.log(student1.markLate());
console.log(student1.markLate());
console.log(student1.markLate());
console.log(Student.EnrollStudents())
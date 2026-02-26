/* let Student1 = {
  Name: "Julfikar Rahman",
  Age: 32,
  Cgpa: 3.43,
  Language: ["Python", "C", "Javascript", "HTML", "CSS"],
};

let Student2 = {
  Name: "Labonno Rahman",
  Age: 32,
  Cgpa: 3.58,
  Language: ["HTML", "CSS"],
};

let Student3 = {
  Name: "Agun Rahman",
  Age: 32,
  Cgpa: 3.05,
  Language: ["Python", "C"],
};

let Student4 = {
  Name: "Samanta Rahman",
  Age: 24,
  Cgpa: 3.8,
  Language: "C",
};

console.log(Student.Language); */

let Student = function (name, age, cgpa, language) {
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.language = language;

  this.display = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.language);
  };
};

student1 = new Student("Julfikar Rahman", 32, 3.43, [
  "Python",
  "C",
  "Javascript",
  "HTML",
  "CSS",
]);
student2 = new Student("Labonno Rahman", 25, 3.85, "Python");
student3 = new Student("Jewel", 32, 3.55, ["Python", "C"]);
student4 = new Student("Agun", 28, 3.24, ["HTML", "CSS"]);

student1.display();

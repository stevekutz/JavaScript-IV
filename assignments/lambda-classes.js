// CODE here for your Lambda Classes
class Person{
  constructor(person_attr){
    this.name = person_attr.name;
    this.age = person_attr.age;
    this.location = person_attr.location;
    this.gender = person_attr.gender
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}}`;
  }
}

class Instructor extends Person{
  constructor(inst_attr){
    super(inst_attr);
    this.specialty = inst_attr.specialty;
    this.favLanguage = instr_att.favLanguage;
    this.catchPhrase = inst_attr.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(stu_attr){
    super(stu_attr);
    this.previousBackground = stu_attr.previousBackground;
    this.className = stu_attr.className;
    this.favSubjects = stu_attr.favSubjects;
  }

  listsubjects() {
    this.favSubjects.forEach( el => console.log(`${el}\n`));
  }
  PRAassignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun a sprint challenge on ${subject}`;
  }
}


class ProjectManager extends Instructor {
  constructor(pm_attr){
    super(pm_attr);
    this.gradClassname = pm_attr.gradClassname;
    this.favInStructor = pm_attr.favInStructor;
  }

  standUp(channel){
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject){
    console.log(`${this.name} debugs ${student.name}'s code on ${subject} `);
  }
}
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
    this.favLanguage = inst_attr.favLanguage;
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
    this.favInstructor = pm_attr.favInstructor;
  }

  standUp(channel){
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject){
    console.log(`${this.name} debugs ${student.name}'s code on ${subject} `);
  }
}

// objects
const jory = new Instructor({
  name: 'Jory',
  age: 52,
  location: 'Denver',
  gender: 'male',
  specialty: 'Django',
  favLanguage: 'Python',
  catchPhrase: 'I need to look that up on StackOveflow'
});


const beth= new Instructor({
  name: 'Beth',
  age: 29,
  location: 'Salt Lake City',
  gender: 'female',
  specialty: 'databases',
  favLanguage: 'MongoDb',
  catchPhrase: 'the answer is in the data'
});


const skip = new Instructor({
  name: 'Skip',
  age: 41,
  location: 'Miami',
  gender: 'male',
  specialty: 'algorithms',
  favLanguage: 'C/C++',
  catchPhrase: 'there is faster way to do that'
});

const gary = new Student({
  name: 'Trey',
  age: 25,
  location: 'Athens',
  gender: 'male',
  previousBackground: 'sales',
  className: 'WFT19',
  favSubjects: ['food', 'dancing', 'cooking'],
});

const fred = new Student({
  name: 'Fred',
  age: 36,
  location: 'New York',
  gender: 'male',
  previousBackground: 'mortician',
  className: 'WFT13',
  favSubjects: ['poetry', 'music', 'wine tasting', 'foreign films'],
});

const fiona = new Student({
  name: 'Fiona',
  age: 31,
  location: 'Denver',
  gender: 'female',
  previousBackground: 'drummer',
  className: 'WFT17',
  favSubjects: ['speed metal', 'mosh pits', 'tattoos'],
});

const violet = new ProjectManager({
  name: 'Violet',
  age: 41,
  location: 'Miami',
  gender: 'male',
  specialty: 'algorithms',
  favLanguage: 'JavaScript',
  catchPhrase: 'I love React',
  gradClassname: 'CS302',
  favInstructor: 'Skip'
});

const mark = new ProjectManager({
  name: 'Skip',
  age: 47,
  location: 'Fargo',
  gender: 'male',
  specialty: 'front end',
  favLanguage: 'JavaScript',
  catchPhrase: 'I love LESS, Flexbox, & Grid',
  gradClassname: 'CS342',
  favInstructor: 'Beth'
});


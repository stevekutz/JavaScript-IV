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

  gradeChange(student){
    if(getRandomInt(2)) {
      student.grade += Math.round(getRandomBetween(1, 10));
    } else {
      student.grade -= Math.round(getRandomBetween(1, 10));
    }

    if(student.grade > 100) { student.grade = 100 }
    if(student.grade < 0) {student.grade = 0}

    return `${student.name}'s grade is ${Math.round(student.grade)}`
  }
}

class Student extends Person {
  constructor(stu_attr){
    super(stu_attr);
    this.previousBackground = stu_attr.previousBackground;
    this.className = stu_attr.className;
    this.favSubjects = stu_attr.favSubjects;
    this.grade = stu_attr.grade; // STRETCH
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
  graduate(){
    if(this.grade > 70) {
      return `${this.name} is ready to go Pro, they can graduate !!!`
    } else {
      return `${this.name} needs to fix up some missings assignments and have them graded`;
    }
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


function getRandomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


const gary = new Student({
  name: 'Gary',
  age: 25,
  location: 'Athens',
  gender: 'male',
  previousBackground: 'sales',
  className: 'WFT19',
  favSubjects: ['food', 'dancing', 'cooking'],
  grade: getRandomBetween(30, 100),
});

const fred = new Student({
  name: 'Fred',
  age: 36,
  location: 'New York',
  gender: 'male',
  previousBackground: 'mortician',
  className: 'WFT13',
  favSubjects: ['poetry', 'music', 'wine tasting', 'foreign films'],
  grade: getRandomBetween(70, 100),
});

const fiona = new Student({
  name: 'Fiona',
  age: 31,
  location: 'Denver',
  gender: 'female',
  previousBackground: 'drummer',
  className: 'WFT17',
  favSubjects: ['speed metal', 'mosh pits', 'tattoos'],
  grade: getRandomBetween(90, 100),
});

const violet = new ProjectManager({
  name: 'Violet',
  age: 41,
  location: 'Miami',
  gender: 'female',
  specialty: 'algorithms',
  favLanguage: 'JavaScript',
  catchPhrase: 'I love React',
  gradClassname: 'CS302',
  favInstructor: 'Skip'
});
const cathy = new ProjectManager({
  name: 'Cathy',
  age: 40,
  location: 'Austin',
  gender: 'female',
  specialty: 'Redux',
  favLanguage: 'JavaScript',
  catchPhrase: 'I love Redux',
  gradClassname: 'CS366',
  favInstructor: 'Beth'
});

// cathy.gradeChange(fred);
// fred.graduate()
// skip.gradeChange(fred);   // keep going until under <=70

// CODE here for your Lambda Classes
class Person {
    constructor (attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak () {
        console.log('Hello my name is ' + this.name +', I am from ' + this.location)
    }
}

class Instructor extends Person {
    constructor (attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo (subject) {
        console.log('Today we are learning about ' + subject)
    }
    grade (student, subject) {
        console.log(this.name + ' receives a perfect score on ' + subject)
    }
}

class Student extends Person {
    constructor (attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects () {
        favSubjects.forEach(function(subject) {
            console.log(subject)
        });
    }
    PRAssignment (subject) {
        console.log(this.name + ' has submitted a PR for ' + subject)
    }
    sprintChallenge (subject) {
        console.log(this.name + ' has begun sprint challenge on ' + subject)
    }
}

class ProjectManagers extends Instructor {
    constructor (attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp (channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode (student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on {subject}`)
    }
}

const guy = new Person({
    name: 'Poppy',
    age: 35,
    location: 'No Where',
})

const Johnny = new Student({
    name: 'Johnny',
    age: 25,
    location: 'Phoenix',
    previousBackground: 'Sales',
    className: 'WebPT9',
    favSubjects: 'Javascript',
});

const Barry = new ProjectManagers({
    name: 'Barry',
    age: 41,
    location: 'Denver',
    specialty: 'Pizza',
    favLanguage: 'Japanese',
    catchPhrase: 'Zing',
});

Johnny.PRAssignment('whatever');

Barry.standUp('@random');
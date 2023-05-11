/*
    Classes & Modules Practice

    Make a parent class called 'Member' which comprehends all the people who belong to a school.

    Make subclasses to include the different roles, such as:
    1. Teacher
    2. Student
*/

class Person {
    constructor(name, age, grade, subject) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.subject = subject;
    }
    
    get getName() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }
    get getGrade() {
        return this.grade;
    }
    get getSubject() {
        return this.subject;
    }
    get fullCard() {
        return `Advanced Studies High School\nName: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}`;
    }
    
    set setName(name) {
        if(typeof name === 'string') {
            this.name = name;
        } else {
            return 'Not a string';
        }
    }
    set setAge(age) {
        if(typeof age === 'number') {
            this.age = age;
        } else {
            return 'NaN';
        }
    }
    set setGrade(grade) {
        if(typeof grade === 'number') {
            this.grade = grade;
        } else {
            return 'NaN';
        }
    }
    set setSubject(subject) {
        if(typeof subject === 'string') {
            this.subject = subject;
        } else {
            return 'Not a string';
        }
    }

    static generateSubject() {
        const subjects = ["Maths","History","Economics","Social Studies","Science","Biology","Chemistry","Physics","Albegra","Business Studies","Geography","Art","Geometry","Precalculus","Computer Science"];
        const randomNumber = Math.floor(Math.random()*15);
        return subjects[randomNumber];
    }
}

class Student extends Person {
    constructor(name, age, grade, subject) {
        super(name, age, grade, subject);
        this.gpa = 0;
    }

    get getGPA() {
        return this.gpa;
    }

    set setGPA(gpa) {
        if(typeof gpa === 'number') {
            this.gpa = gpa;
        } else {
            return 'NaN';
        }
    }
}

class Teacher extends Person {
    constructor(name, age, grade, subject) {
        super(name, age, grade, subject);
        this.studies = '';
    }

    get getStudies() {
        return this.studies;
    }

    set setStudies(studies) {
        if(typeof studies === 'string') {
            this.studies = studies;
        } else {
            return 'Not a string';
        }
    }
}

export {Person, Student, Teacher};
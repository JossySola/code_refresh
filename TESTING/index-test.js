import assert from "assert";
import {Person, Student, Teacher} from "./index.js";

describe('class Person', () => {
    let person;
    before(() => {
        person = new Person('Albert Einstein',144,12,'Physics');
    });

    it('returns a Person instance', () => {
        // SETUP
        const expectedResult = true;
        // EXERCISE
        const result = person instanceof Person;
        // VERIFY
        assert.ok(expectedResult === result);
    });
    describe('new Person()', () => {
        it('creates an instance with no arguments given', () => {
            // SETUP
            const sample = new Person();
            const expectedResult = true;
            // EXERCISE
            const result = sample instanceof Person;
            // VERIFY
            assert.ok(expectedResult === result);
        });
    });
    describe('Person.generateSubject()', () => {
        it('the aleatory logic always targets existing values', () => {
            // SETUP
            let isFaulty = false;
            const expectedResult = false;
            // EXERCISE
            for(let i=0; i < 30; i++) {
                const subject = Person.generateSubject();
                if(subject == false) {
                    isFaulty = true;
                }
            }
            // VERIFY
            assert.ok(expectedResult === isFaulty);
        });
    });
    describe('Getters return the correct value of the properties:', () => {
        it('Name, Age, Grade, Subject', () => {
            /* 
            FOR ACTUAL TESTING PURPOSES I'M AWARE THIS WOULD BE 
            THE WRONG APPROACH. INDIVIDUAL METHOD TESTING IS BETTER 
            FOR EFFICIENTLY IDENTIFYING THE ORIGIN OF AN ERROR
            */
            // SETUP
            const name = 'Albert Einstein';
            const age = 144;
            const grade = 12;
            const subject = 'Physics';
        
            // EXERCISE
            const resultName = person.getName;
            const resultAge = person.getAge;
            const resultGrade = person.getGrade;
            const resultSubject = person.getSubject;

            // VERIFY
            if(name === resultName && age === resultAge && grade === resultGrade && subject === resultSubject) {
                assert.ok(true);
            } else {
                assert.ok(false);
            }
        });
        it('fullCard() returns correct text information about the person', () => {
            // SETUP
            const expectedResult = "Advanced Studies High School\nName: Albert Einstein\nAge: 144\nGrade: 12";
            // EXERCISE
            const result = person.fullCard;
            // VERIFY
            assert.ok(expectedResult === result);
        });
    });
    describe('Setters correctly reassign properties:', () => {
        it('Name, Age, Grade, Subject', () => {
            /* 
            FOR ACTUAL TESTING PURPOSES I'M AWARE THIS WOULD BE 
            THE WRONG APPROACH. INDIVIDUAL METHOD TESTING IS BETTER 
            FOR EFFICIENTLY IDENTIFYING THE ORIGIN OF AN ERROR
            */
            // SETUP
            const name = 'Stephen Hawking';
            const age = 81;
            const grade = 11;
            const subject = 'Cosmology';
            // EXERCISE
            const resultName = person.setName = 'Stephen Hawking';
            const resultAge = person.setAge = 81;
            const resultGrade = person.setGrade = 11;
            const resultSubject = person.setSubject = 'Cosmology';

            // VERIFY
            if(name === resultName && age === resultAge && grade === resultGrade && subject === resultSubject) {
                assert.ok(true);
            } else {
                assert.ok(false);
            }
        });
    });
});

//let student;
//let teacher;
//student = new Student('Dylan Brown',17,11,'Economics');
//teacher = new Teacher('Gabriela Deyes',35,6,'Algebra');
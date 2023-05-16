import assert from "assert";
import {Person, Student, Teacher} from "./index.js";

describe('CLASS PERSON', () => {
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

describe('SUBCLASS STUDENT', () => {
    let student;
    before(() => {
        student = new Student('Dylan Brown',17,11,'Economics');
    });
    it('returns a Student instance', () => {
        // SETUP
        const expectedResult = true;
        // EXERCISE
        const result = student instanceof Student;
        // VERIFY
        assert.ok(expectedResult === result);
    });
    it('extends from Person', () => {
        // SETUP
        const expectedResult = true;
        // EXERCISE
        const result = student instanceof Person;
        // VERIFY
        assert.ok(expectedResult === result);
    });
    describe('Getters return the correct value of the properties:', () => {
        it('Name, Age, Grade, Subject, GPA', () => {
            // SETUP
            const expectedName = 'Dylan Brown';
            const expectedAge = 17;
            const expectedGrade = 11;
            const expectedSubject = 'Economics';
            const expectedGPA = 0;
            // EXERCISE
            const name = student.getName;
            const age = student.getAge;
            const grade = student.getGrade;
            const subject = student.getSubject;
            const gpa = student.getGPA;
            // VERIFY
            if(name === expectedName && age === expectedAge && grade === expectedGrade && subject === expectedSubject && gpa === expectedGPA) {
                assert.ok(true);
            } else {
                assert.ok(false);
            }
        });
    });
    describe('Student setter', () => {
        it('setGPA()', () => {
            // SETUP
            const expected = 2.2;
            // EXERCISE
            const result = student.setGPA = 2.2;
            // VERIFY
            assert.ok(expected === result);
        });
    });
});

describe('SUBCLASS TEACHER', () => {
    let teacher;
    before(() => {
        teacher = new Teacher('Gabriela Deyes',35,6,'Algebra');
    });
    it('returns a Student instance', () => {
        // SETUP
        const expectedResult = true;
        // EXERCISE
        const result = teacher instanceof Teacher;
        // VERIFY
        assert.ok(expectedResult === result);
    });
    it('extends from Person', () => {
        // SETUP
        const expectedResult = true;
        // EXERCISE
        const result = teacher instanceof Person;
        // VERIFY
        assert.ok(expectedResult === result);
    });
    describe('Getters return the correct value of the properties:', () => {
        it('Name, Age, Grade, Subject, Studies', () => {
            // SETUP
            const expectedName = 'Gabriela Deyes';
            const expectedAge = 35;
            const expectedGrade = 6;
            const expectedSubject = 'Algebra';
            const expectedStudies = '';
            // EXERCISE
            const name = teacher.getName;
            const age = teacher.getAge;
            const grade = teacher.getGrade;
            const subject = teacher.getSubject;
            const studies = teacher.getStudies;
            // VERIFY
            if(name === expectedName && age === expectedAge && grade === expectedGrade && subject === expectedSubject && studies === expectedStudies) {
                assert.ok(true);
            } else {
                assert.ok(false);
            }
        });
    });
    describe('Teacher setter', () => {
        it('setStudies()', () => {
            // SETUP
            const expected = 'Chemistry';
            // EXERCISE
            const result = teacher.setGPA = 'Chemistry';
            // VERIFY
            assert.ok(expected === result);
        });
    });
});
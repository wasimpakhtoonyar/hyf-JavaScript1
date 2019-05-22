console.log('student manager');

const queenName = "Margrethe";
const class07Students = [];

function addStudentToClass(studentName) {
    if (studentName === '') {
        return "You cannot add an empty string!!"
    }

    if (studentName === queenName) {
        return class07Students.push(studentName);
    }

    if (class07Students.indexOf(studentName) !== -1) {
        return "Student " + studentName + " is already in the class";
    }

    if (class07Students.length > 5) {
        return "Cannot add more students to class 07";
    }

    return class07Students.push(studentName);
}

function getNumberOfStudents() {
    return class07Students.length;
}

console.log(addStudentToClass('Marco'));
console.log(addStudentToClass('Marco1'));
console.log(addStudentToClass('Marco'));
console.log(addStudentToClass(''));
console.log('Number of students: ' + getNumberOfStudents());
console.log(addStudentToClass('Marco2'));
console.log(addStudentToClass('Marco3'));
console.log('Number of students: ' + getNumberOfStudents());
console.log(addStudentToClass('Marco4'));
console.log(addStudentToClass('Marco5'));
console.log(addStudentToClass('Marco6'));
console.log(addStudentToClass(queenName));
console.log(class07Students);
console.log('Number of students: ' + getNumberOfStudents());
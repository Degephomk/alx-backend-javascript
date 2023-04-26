interface Teacher {
  readonly firstName: string; // The first name of the teacher. This property is readonly and cannot be changed.
  readonly lastName: string; // The last name of the teacher. This property is readonly and cannot be changed.
  fullTimeEmployee: boolean; // Whether the teacher is a full-time employee.
  yearsOfExperience: number; // The number of years of experience the teacher has.
  location: string; // The location of the teacher's workplace.
  [key: string]: any; // Any other properties that may be associated with the teacher.
}

interface Directors extends Teacher { // The Directors interface extends the Teacher interface.
  numberOfReports: number; // The number of reports the director has.
}

function printTeacher(firstName: string, lastName: string) { // The printTeacher function takes two string parameters, firstName and lastName, and returns a string.
  return `${firstName[0]}. ${lastName}`; // The function returns a string that is the first letter of the first name, followed by a period, followed by the last name.
}

interface printTeacherFunction { // The printTeacherFunction interface defines the signature of the printTeacher function.
  firstName: string; // The first name of the teacher.
  lastName: string; // The last name of the teacher.
}

interface classInterface { // The classInterface interface defines the properties and methods that a class must have to be considered a StudentClass.
  firstName: string; // The first name of the student.
  lastName: string; // The last name of the student.
  workOnHomework(): string; // A method that returns a string indicating whether the student is currently working on homework.
  displayName(): string; // A method that returns a string with the student's first name.
}

class StudentClass implements classInterface { // The StudentClass class implements the classInterface interface.
  firstName: string; // The first name of the student.
  lastName: string; // The last name of the student.

  constructor(firstName: string, lastName: string) { // The constructor takes two string parameters, firstName and lastName, and initializes the class's firstName and lastName properties.
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() { // The workOnHomework method returns a string indicating whether the student is currently working on homework.
    return 'Currently working';
  }

  displayName() { // The displayName method returns a string with the student's first name.
    return `${this.firstName}`;
  }
}

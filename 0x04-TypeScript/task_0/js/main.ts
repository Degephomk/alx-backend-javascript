interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 23,
  location: "Los Angeles"
};

const studentsList: Array<Student> = [student1, student2];

// Create a table
const table = document.createElement("table");

// For each element in the array, append a new row to the table
for (const student of studentsList) {
  const row = document.createElement("tr");
  const cell1 = document.createElement("td");
  cell1.textContent = student.firstName;
  row.appendChild(cell1);
  const cell2 = document.createElement("td");
  cell2.textContent = student.location;
  row.appendChild(cell2);
  table.appendChild(row);
}

// Append the table to the body of the document
document.body.appendChild(table);

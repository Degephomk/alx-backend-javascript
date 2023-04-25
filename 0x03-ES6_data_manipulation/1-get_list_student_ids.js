/**
 * Get a list of student ids from an array of students.
 *
 * @param {Array<Object>} students - An array of students.
 * @returns {Array<Number>} - An array of student ids.
 */
export default function getListStudentIds(students) {
  // Check if the argument is an array.
  if (!Array.isArray(students)) {
    // If not, return an empty array.
    return [];
  }

  // Use the `map` function to iterate over the array and return an array of the ids of the students.
  return students.map((student) => student.id);
}


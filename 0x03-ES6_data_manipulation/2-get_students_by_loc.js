/**
 * Get a list of students who are located in a specific city.
 *
 * @param {Array<Object>} students - An array of students.
 * @param {String} city - The city to filter by.
 * @returns {Array<Object>} - An array of students who are located in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}

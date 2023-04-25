/**
 * Get a list of student ids from an array of students.
 *
 * @param {Array<Object>} students - An array of students.
 * @returns {Array<Number>} - An array of student ids.
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}

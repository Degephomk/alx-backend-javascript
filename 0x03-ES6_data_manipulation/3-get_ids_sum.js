/**
 * Get the sum of all the student ids.
 *
 * @param {Array<Object>} students - An array of students.
 * @returns {Number} - The sum of all the student ids.
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}

/**
 * Update the grades of students in a specific city.
 *
 * @param {Array<Object>} students - An array of students.
 * @param {String} city - The city to filter by.
 * @param {Array<Object>} newGrades - An array of grades, with the following format:
 *   - studentId: The id of the student.
 *   - grade: The grade of the student.
 * @returns {Array<Object>} - An array of students with their new grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}

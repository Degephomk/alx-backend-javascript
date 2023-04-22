class HolbertonCourse:

  def __init__(self, name: str, length: int, students: list) -> None:
    if not isinstance(name, str):
      raise TypeError("name must be a string")
    if not isinstance(length, int):
      raise TypeError("length must be an integer")
    if not isinstance(students, list):
      raise TypeError("students must be a list")

    self._name = name
    self._length = length
    self._students = students

  @property
  def name(self) -> str:
    return self._name

  @name.setter
  def name(self, name: str) -> None:
    if not isinstance(name, str):
      raise TypeError("name must be a string")
    self._name = name

  @property
  def length(self) -> int:
    return self._length

  @length.setter
  def length(self, length: int) -> None:
    if not isinstance(length, int):
      raise TypeError("length must be an integer")
    self._length = length

  @property
  def students(self) -> list:
    return self._students

  @students.setter
  def students(self, students: list) -> None:
    if not isinstance(students, list):
      raise TypeError("students must be a list")
    self._students = students

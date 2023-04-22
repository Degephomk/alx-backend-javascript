export default class ClassRoom {

  constructor(maxStudentsSize: number) {
    this._maxStudentsSize = maxStudentsSize;
  }

  get maxStudentsSize() {
    return this._maxStudentsSize;
  }

  set maxStudentsSize(maxStudentsSize: number) {
    this._maxStudentsSize = maxStudentsSize;
  }
}

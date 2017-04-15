import * as _ from "underscore";

class JsStorage {
  static initialize() {
    console.log("--- js storage initialise ---");
    if (!this.obj) {
      this.obj = {};
    }
  }

  static get(id) {
    return this.obj[id];
  }

  static getAndClear(id) {
    let oldVal = _.clone(this.obj[id])
    delete this.obj[id];
    return oldVal;
  }

  static set(id, value) {
    this.obj[id] = value;
  }
}

JsStorage.initialize();

export default JsStorage;
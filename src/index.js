"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require("underscore");

var _ = _interopRequireWildcard(_underscore);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JsStorage = function () {
  function JsStorage() {
    _classCallCheck(this, JsStorage);
  }

  _createClass(JsStorage, null, [{
    key: "initialize",
    value: function initialize() {
      console.log("--- js storage initialise ---");
      if (!this.obj) {
        this.obj = {};
      }
    }
  }, {
    key: "get",
    value: function get(id) {
      return this.obj[id];
    }
  }, {
    key: "getAndClear",
    value: function getAndClear(id) {
      var oldVal = _.clone(this.obj[id]);
      delete this.obj[id];
      return oldVal;
    }
  }, {
    key: "set",
    value: function set(id, value) {
      this.obj[id] = value;
    }
  }]);

  return JsStorage;
}();

JsStorage.initialize();

exports.default = JsStorage;
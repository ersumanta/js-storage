var _ = require("underscore");

var obj = {};

module.exports = {
    get: function (id) {
        return obj[id];
    },
    getAndClear: function (id) {
        let oldVal = _.clone(obj[id])
        delete obj[id];
        return oldVal;
    },
    set: function (id, value) {
        obj[id] = value;
    },
    initialize: function () {
        console.log("--- js storage initialise ---");
        if (!obj) {
            obj = {};
        }
    },
    reset: function () {
        obj= {};
    }
};

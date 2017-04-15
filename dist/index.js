"use strict";

var _ = require("underscore");

var obj = {};

module.exports = {
    get: function get(id) {
        return obj[id];
    },
    getAndClear: function getAndClear(id) {
        var oldVal = _.clone(obj[id]);
        delete obj[id];
        return oldVal;
    },
    set: function set(id, value) {
        obj[id] = value;
    },
    initialize: function initialize() {
        console.log("--- js storage initialise ---");
        if (!obj) {
            obj = {};
        }
    },
    reset: function reset() {
        obj = {};
    }
};

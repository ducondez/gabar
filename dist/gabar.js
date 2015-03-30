"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Query = function Query(options) {
  _classCallCheck(this, Query);

  this.limit = options.limit || 15;
  this.filters = options.filters || {};

  this.state = {
    page: 1,
    pages: 1,
    cound: 0,
    sortBy: null,
    sortDirection: null
  };
  console.log("create");
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditProfile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditProfile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_helperClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helperClass */ "./resources/js/helpers/helperClass.js");
/* harmony import */ var _api_users_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/users.api */ "./resources/js/api/users.api.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['propId'],
  data: function data() {
    return {
      profile: {
        profession: '',
        description: '',
        location: '' // propId:'',

      }
    };
  },
  methods: {
    fetch: function fetch(id) {
      Object(_api_users_api__WEBPACK_IMPORTED_MODULE_1__["getProfile"])(id).then(function (res) {
        console.log(res);
      })["catch"](function (err) {
        console.error(err);
      });
    },
    create: function create() {
      var _this = this;

      var check = _helpers_helperClass__WEBPACK_IMPORTED_MODULE_0__["default"].validator(this.profile); //validate

      if (check != "e0") {
        createProfile(this.profile).then(function (res) {
          console.log(res);

          _this.$router.push('/dashboard');
        })["catch"](function (err) {
          console.error(err);
        });
      }
    }
  },
  mounted: function mounted() {
    // this.fetch(id);
    console.log(this.propId);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditProfile.vue?vue&type=template&id=570c77a4&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditProfile.vue?vue&type=template&id=570c77a4& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "section section-lg" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-8" }, [
            _c("div", { staticClass: "card shadow" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("form", { attrs: { role: "form" } }, [
                  _c("div", { staticClass: "form-group mb-3" }, [
                    _c(
                      "div",
                      { staticClass: "input-group input-group-alternative" },
                      [
                        _vm._m(0),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.profile.profession,
                              expression: "profile.profession"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            placeholder: "Profession",
                            id: "profession",
                            type: "text",
                            name: "profession"
                          },
                          domProps: { value: _vm.profile.profession },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.profile,
                                "profession",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group mb-3" }, [
                    _c(
                      "div",
                      { staticClass: "input-group input-group-alternative" },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.profile.location,
                              expression: "profile.location"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            placeholder: "Location",
                            type: "text",
                            name: "location"
                          },
                          domProps: { value: _vm.profile.location },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.profile,
                                "location",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "div",
                      { staticClass: "input-group input-group-alternative" },
                      [
                        _vm._m(2),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.profile.description,
                              expression: "profile.description"
                            }
                          ],
                          attrs: {
                            name: "description",
                            id: "",
                            cols: "50",
                            rows: "10",
                            placeholder: "description"
                          },
                          domProps: { value: _vm.profile.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.profile,
                                "description",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-center" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary my-4",
                        attrs: { type: "button" },
                        on: { click: _vm.create }
                      },
                      [_vm._v("Create Profile")]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "ni ni-email-83" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "ni ni-email-83" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "ni ni-lock-circle-open" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "custom-control custom-control-alternative custom-checkbox"
      },
      [
        _c("input", {
          staticClass: "custom-control-input",
          attrs: { id: " customCheckLogin", type: "checkbox" }
        }),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "custom-control-label",
            attrs: { for: " customCheckLogin" }
          },
          [_c("span", [_vm._v("Remember me")])]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/httpClient.js":
/*!****************************************!*\
  !*** ./resources/js/api/httpClient.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var httpsClient = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseUrl: process.env.VUE_APP_BASE_URL,
  timeout: 20000,
  // indicates, 5000ms ie. 5 second
  headers: {
    "Content-Type": "application/json"
  }
}); // Adding token to request using interceptors

httpsClient.interceptors.request.use(function (config) {
  var token = localStorage.getItem('jwt');

  if (token) {
    config.headers['Authorization'] = "Bearer ".concat(token);
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = (httpsClient);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./resources/js/api/users.api.js":
/*!***************************************!*\
  !*** ./resources/js/api/users.api.js ***!
  \***************************************/
/*! exports provided: fetchUser, createProfile, getProfile, deleteProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return fetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProfile", function() { return createProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProfile", function() { return deleteProfile; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _httpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpClient */ "./resources/js/api/httpClient.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function fetchUser() {
  return _fetchUser.apply(this, arguments);
}

function _fetchUser() {
  _fetchUser = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _httpClient__WEBPACK_IMPORTED_MODULE_1__["default"].get('/api/user');

          case 2:
            res = _context.sent;
            return _context.abrupt("return", res);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchUser.apply(this, arguments);
}

function createProfile(_x) {
  return _createProfile.apply(this, arguments);
}

function _createProfile() {
  _createProfile = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(profile) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _httpClient__WEBPACK_IMPORTED_MODULE_1__["default"].post('/api/profile/create', profile);

          case 2:
            res = _context2.sent;
            return _context2.abrupt("return", res);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createProfile.apply(this, arguments);
}

function getProfile(_x2) {
  return _getProfile.apply(this, arguments);
}

function _getProfile() {
  _getProfile = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _httpClient__WEBPACK_IMPORTED_MODULE_1__["default"].get('/api/profile/get/' + id);

          case 2:
            res = _context3.sent;
            return _context3.abrupt("return", res);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getProfile.apply(this, arguments);
}

function deleteProfile(_x3) {
  return _deleteProfile.apply(this, arguments);
}

function _deleteProfile() {
  _deleteProfile = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(postId) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            res = _httpClient__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"]('/api/profile/delete/' + postId);
            return _context4.abrupt("return", res);

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteProfile.apply(this, arguments);
}

/***/ }),

/***/ "./resources/js/components/EditProfile.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/EditProfile.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditProfile_vue_vue_type_template_id_570c77a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProfile.vue?vue&type=template&id=570c77a4& */ "./resources/js/components/EditProfile.vue?vue&type=template&id=570c77a4&");
/* harmony import */ var _EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProfile.vue?vue&type=script&lang=js& */ "./resources/js/components/EditProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditProfile_vue_vue_type_template_id_570c77a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditProfile_vue_vue_type_template_id_570c77a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditProfile.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/EditProfile.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EditProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditProfile.vue?vue&type=template&id=570c77a4&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/EditProfile.vue?vue&type=template&id=570c77a4& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_template_id_570c77a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EditProfile.vue?vue&type=template&id=570c77a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditProfile.vue?vue&type=template&id=570c77a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_template_id_570c77a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_template_id_570c77a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/helperClass.js":
/*!*********************************************!*\
  !*** ./resources/js/helpers/helperClass.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var helperClass =
/*#__PURE__*/
function () {
  function helperClass() {
    _classCallCheck(this, helperClass);
  }

  _createClass(helperClass, [{
    key: "validator",
    value: function validator(formObject) {
      for (var key in formObject) {
        if (formObject[key] === "") {
          console.log(key + ' ' + 'fiel is required');
          return "e0";
        }
      }
    }
  }]);

  return helperClass;
}();

/* harmony default export */ __webpack_exports__["default"] = (helperClass = new helperClass());

/***/ })

}]);
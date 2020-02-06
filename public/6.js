(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CreateAccount.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CreateAccount.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_register_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/register.api */ "./resources/js/api/register.api.js");
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
  data: function data() {
    return {
      userDetails: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    };
  },
  methods: {
    validate: function validate() {
      for (var key in this.userDetails) {
        if (this.userDetails[key] === "") {
          console.log(key + ' ' + 'fiel is required');
          return false;
        }
      }

      this.register();
    },
    register: function register() {
      Object(_api_register_api__WEBPACK_IMPORTED_MODULE_0__["createAccount"])(this.userDetails).then(function (response) {
        console.log(response);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CreateAccount.vue?vue&type=template&id=516998b6&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CreateAccount.vue?vue&type=template&id=516998b6& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    _c("main", [
      _c("section", { staticClass: "section section-shaped section-lg" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "container pt-lg-md" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-lg-5" }, [
              _c("div", { staticClass: "card bg-secondary shadow border-0" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "card-body px-lg-5 py-lg-5" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("form", [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "input-group input-group-alternative mb-3"
                        },
                        [
                          _vm._m(3),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.userDetails.name,
                                expression: "userDetails.name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "name",
                              name: "name",
                              placeholder: "Name",
                              type: "text"
                            },
                            domProps: { value: _vm.userDetails.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.userDetails,
                                  "name",
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
                        {
                          staticClass:
                            "input-group input-group-alternative mb-3"
                        },
                        [
                          _vm._m(4),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.userDetails.email,
                                expression: "userDetails.email"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "email",
                              name: "email",
                              placeholder: "Email",
                              type: "email"
                            },
                            domProps: { value: _vm.userDetails.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.userDetails,
                                  "email",
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
                          _vm._m(5),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.userDetails.password,
                                expression: "userDetails.password"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "password",
                              name: "password",
                              placeholder: "Password",
                              type: "password"
                            },
                            domProps: { value: _vm.userDetails.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.userDetails,
                                  "password",
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
                          _vm._m(6),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.userDetails.password_confirmation,
                                expression: "userDetails.password_confirmation"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "Password_confirmation",
                              name: "Password_confirmation",
                              placeholder: "Password Confirmed",
                              type: "password"
                            },
                            domProps: {
                              value: _vm.userDetails.password_confirmation
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.userDetails,
                                  "password_confirmation",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(7),
                    _vm._v(" "),
                    _vm._m(8),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-center" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary mt-4",
                          attrs: { type: "button" },
                          on: { click: _vm.validate }
                        },
                        [_vm._v("Create account")]
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "shape shape-style-1 bg-gradient-default" },
      [
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-white pb-5" }, [
      _c("div", { staticClass: "text-muted text-center mb-3" }, [
        _c("small", [_vm._v("Sign up with")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-center" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-neutral btn-icon mr-4",
            attrs: { href: "#" }
          },
          [
            _c("span", { staticClass: "btn-inner--icon" }),
            _vm._v(" "),
            _c("span", { staticClass: "btn-inner--text" }, [_vm._v("Github")])
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "btn btn-neutral btn-icon", attrs: { href: "#" } },
          [
            _c("span", { staticClass: "btn-inner--icon" }),
            _vm._v(" "),
            _c("span", { staticClass: "btn-inner--text" }, [_vm._v("Google")])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center text-muted mb-4" }, [
      _c("small", [_vm._v("Or sign up with credentials")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "ni ni-hat-3" })
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
    return _c("div", { staticClass: "text-muted font-italic" }, [
      _c("small", [
        _vm._v("password strength: "),
        _c("span", { staticClass: "text-success font-weight-700" }, [
          _vm._v("strong")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row my-4" }, [
      _c("div", { staticClass: "col-12" }, [
        _c(
          "div",
          {
            staticClass:
              "custom-control custom-control-alternative custom-checkbox"
          },
          [
            _c("input", {
              staticClass: "custom-control-input",
              attrs: { id: "customCheckRegister", type: "checkbox" }
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass: "custom-control-label",
                attrs: { for: "customCheckRegister" }
              },
              [
                _c("span", [
                  _vm._v("I agree with the "),
                  _c("a", { attrs: { href: "#" } }, [_vm._v("Privacy Policy")])
                ])
              ]
            )
          ]
        )
      ])
    ])
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

/***/ "./resources/js/api/register.api.js":
/*!******************************************!*\
  !*** ./resources/js/api/register.api.js ***!
  \******************************************/
/*! exports provided: createAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAccount", function() { return createAccount; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _httpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpClient */ "./resources/js/api/httpClient.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/**
 * @function createAccount
 * @params user:{}
 * @description register the user
 *
 */

function createAccount(_x) {
  return _createAccount.apply(this, arguments);
}

function _createAccount() {
  _createAccount = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(user_details) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _httpClient__WEBPACK_IMPORTED_MODULE_1__["default"].post('api/register', user_details);

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
  return _createAccount.apply(this, arguments);
}

/***/ }),

/***/ "./resources/js/components/CreateAccount.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/CreateAccount.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateAccount_vue_vue_type_template_id_516998b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateAccount.vue?vue&type=template&id=516998b6& */ "./resources/js/components/CreateAccount.vue?vue&type=template&id=516998b6&");
/* harmony import */ var _CreateAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateAccount.vue?vue&type=script&lang=js& */ "./resources/js/components/CreateAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateAccount_vue_vue_type_template_id_516998b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateAccount_vue_vue_type_template_id_516998b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CreateAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CreateAccount.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/CreateAccount.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CreateAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CreateAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CreateAccount.vue?vue&type=template&id=516998b6&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/CreateAccount.vue?vue&type=template&id=516998b6& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAccount_vue_vue_type_template_id_516998b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CreateAccount.vue?vue&type=template&id=516998b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CreateAccount.vue?vue&type=template&id=516998b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAccount_vue_vue_type_template_id_516998b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAccount_vue_vue_type_template_id_516998b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
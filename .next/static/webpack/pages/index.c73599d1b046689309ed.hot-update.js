webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/footer */ "./src/footer.js");
/* harmony import */ var _src_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/navbar */ "./src/navbar.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ "./node_modules/@material-ui/icons/StarBorder.js");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");


var _jsxFileName = "C:\\xampp\\htdocs\\arquivos\\javascript\\nextJs\\nextjs-with-materialize-ui\\pages\\index.js",
    _s = $RefreshSig$();



















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__["makeStyles"])(function (theme) {
  return {
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none'
      }
    },
    appBar: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },
    toolbar: {
      flexWrap: 'wrap'
    },
    toolbarTitle: {
      flexGrow: 1
    },
    link: {
      margin: theme.spacing(1, 1.5)
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6)
    },
    cardHeader: {
      backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700]
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2)
    }
  };
});
var tiers = [{
  title: 'Free',
  price: '0',
  description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
  buttonText: 'Sign up for free',
  buttonVariant: 'outlined'
}, {
  title: 'Pro',
  subheader: 'Most popular',
  price: '15',
  description: ['20 users included', '10 GB of storage', 'Help center access', 'Priority email support'],
  buttonText: 'Get started',
  buttonVariant: 'contained'
}, {
  title: 'Enterprise',
  price: '30',
  description: ['50 users included', '30 GB of storage', 'Help center access', 'Phone & email support'],
  buttonText: 'Contact us',
  buttonVariant: 'outlined'
}];
function Home() {
  _s();

  var _this = this;

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 6
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_18__["default"], {
      maxWidth: "sm",
      component: "main",
      className: classes.heroContent,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
        component: "h1",
        variant: "h2",
        align: "center",
        color: "textPrimary",
        gutterBottom: true,
        children: "BUTTONS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.root,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "contained",
          children: "Default"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 8
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "contained",
          color: "primary",
          children: "Primary"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 8
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "contained",
          color: "secondary",
          children: "Secondary"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 8
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "contained",
          disabled: true,
          children: "Disabled"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 8
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "contained",
          color: "primary",
          href: "#contained-buttons",
          children: "Link"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 8
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 6
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
        component: "h1",
        variant: "h2",
        align: "center",
        color: "textPrimary",
        gutterBottom: true,
        children: "GRID XS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.root,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
          container: true,
          spacing: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
            item: true,
            xs: 12,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
            item: true,
            xs: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
            item: true,
            xs: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
            item: true,
            xs: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
            item: true,
            xs: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
            item: true,
            xs: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
            item: true,
            xs: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 10
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 8
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
        component: "h1",
        variant: "h2",
        align: "center",
        color: "textPrimary",
        gutterBottom: true,
        children: "Pricing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
        variant: "h5",
        align: "center",
        color: "textSecondary",
        component: "p",
        children: "Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_18__["default"], {
      maxWidth: "md",
      component: "main",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
        container: true,
        spacing: 5,
        alignItems: "flex-end",
        children: tiers.map(function (tier) {
          return (
            /*#__PURE__*/
            // Enterprise card is full width at sm breakpoint
            Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
              item: true,
              xs: 12,
              sm: tier.title === 'Enterprise' ? 12 : 6,
              md: 4,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  title: tier.title,
                  subheader: tier.subheader,
                  titleTypographyProps: {
                    align: 'center'
                  },
                  subheaderTypographyProps: {
                    align: 'center'
                  },
                  action: tier.title === 'Pro' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_13___default.a, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 50
                  }, _this) : null,
                  className: classes.cardHeader
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: classes.cardPricing,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
                      component: "h2",
                      variant: "h3",
                      color: "textPrimary",
                      children: ["$", tier.price]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 190,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
                      variant: "h6",
                      color: "textSecondary",
                      children: "/mo"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 193,
                      columnNumber: 21
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                    children: tier.description.map(function (line) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
                        component: "li",
                        variant: "subtitle1",
                        align: "center",
                        children: line
                      }, line, false, {
                        fileName: _jsxFileName,
                        lineNumber: 199,
                        columnNumber: 23
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 19
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    fullWidth: true,
                    variant: tier.buttonVariant,
                    color: "primary",
                    children: tier.buttonText
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 206,
                    columnNumber: 19
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 15
              }, _this)
            }, tier.title, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 13
            }, _this)
          );
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }, this);
}

_s(Home, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwidWwiLCJtYXJnaW4iLCJwYWRkaW5nIiwibGlzdFN0eWxlIiwiYXBwQmFyIiwiYm9yZGVyQm90dG9tIiwicGFsZXR0ZSIsImRpdmlkZXIiLCJ0b29sYmFyIiwiZmxleFdyYXAiLCJ0b29sYmFyVGl0bGUiLCJmbGV4R3JvdyIsImxpbmsiLCJzcGFjaW5nIiwiaGVyb0NvbnRlbnQiLCJjYXJkSGVhZGVyIiwiYmFja2dyb3VuZENvbG9yIiwidHlwZSIsImdyZXkiLCJjYXJkUHJpY2luZyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW5Cb3R0b20iLCJ0aWVycyIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvblRleHQiLCJidXR0b25WYXJpYW50Iiwic3ViaGVhZGVyIiwiSG9tZSIsImNsYXNzZXMiLCJyb290IiwibWFwIiwidGllciIsImFsaWduIiwibGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLFNBQVMsR0FBR0MsNEVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2QyxlQUFXO0FBQ1RDLFFBQUUsRUFBRTtBQUNGQyxjQUFNLEVBQUUsQ0FETjtBQUVGQyxlQUFPLEVBQUUsQ0FGUDtBQUdGQyxpQkFBUyxFQUFFO0FBSFQ7QUFESyxLQUQ0QjtBQVF2Q0MsVUFBTSxFQUFFO0FBQ05DLGtCQUFZLHNCQUFlTixLQUFLLENBQUNPLE9BQU4sQ0FBY0MsT0FBN0I7QUFETixLQVIrQjtBQVd2Q0MsV0FBTyxFQUFFO0FBQ1BD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QUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2SEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2SEQ7O0dBaEl1Qk0sSTtVQUNObEMsUzs7O0tBRE1rQyxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM3MzU5OWQxYjA0NjY4OTMwOWVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2Zvb3Rlcic7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vc3JjL25hdmJhcic7XHJcblxyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRIZWFkZXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFN0YXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICdAZ2xvYmFsJzoge1xyXG4gICAgdWw6IHtcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhcHBCYXI6IHtcclxuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxyXG4gIH0sXHJcbiAgdG9vbGJhcjoge1xyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICB9LFxyXG4gIHRvb2xiYXJUaXRsZToge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSwgMS41KSxcclxuICB9LFxyXG4gIGhlcm9Db250ZW50OiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgsIDAsIDYpLFxyXG4gIH0sXHJcbiAgY2FyZEhlYWRlcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOlxyXG4gICAgICB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmdyZXlbMjAwXSA6IHRoZW1lLnBhbGV0dGUuZ3JleVs3MDBdLFxyXG4gIH0sXHJcbiAgY2FyZFByaWNpbmc6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdiYXNlbGluZScsXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgdGllcnMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdGcmVlJyxcclxuICAgIHByaWNlOiAnMCcsXHJcbiAgICBkZXNjcmlwdGlvbjogWycxMCB1c2VycyBpbmNsdWRlZCcsICcyIEdCIG9mIHN0b3JhZ2UnLCAnSGVscCBjZW50ZXIgYWNjZXNzJywgJ0VtYWlsIHN1cHBvcnQnXSxcclxuICAgIGJ1dHRvblRleHQ6ICdTaWduIHVwIGZvciBmcmVlJyxcclxuICAgIGJ1dHRvblZhcmlhbnQ6ICdvdXRsaW5lZCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1BybycsXHJcbiAgICBzdWJoZWFkZXI6ICdNb3N0IHBvcHVsYXInLFxyXG4gICAgcHJpY2U6ICcxNScsXHJcbiAgICBkZXNjcmlwdGlvbjogW1xyXG4gICAgICAnMjAgdXNlcnMgaW5jbHVkZWQnLFxyXG4gICAgICAnMTAgR0Igb2Ygc3RvcmFnZScsXHJcbiAgICAgICdIZWxwIGNlbnRlciBhY2Nlc3MnLFxyXG4gICAgICAnUHJpb3JpdHkgZW1haWwgc3VwcG9ydCcsXHJcbiAgICBdLFxyXG4gICAgYnV0dG9uVGV4dDogJ0dldCBzdGFydGVkJyxcclxuICAgIGJ1dHRvblZhcmlhbnQ6ICdjb250YWluZWQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdFbnRlcnByaXNlJyxcclxuICAgIHByaWNlOiAnMzAnLFxyXG4gICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgJzUwIHVzZXJzIGluY2x1ZGVkJyxcclxuICAgICAgJzMwIEdCIG9mIHN0b3JhZ2UnLFxyXG4gICAgICAnSGVscCBjZW50ZXIgYWNjZXNzJyxcclxuICAgICAgJ1Bob25lICYgZW1haWwgc3VwcG9ydCcsXHJcbiAgICBdLFxyXG4gICAgYnV0dG9uVGV4dDogJ0NvbnRhY3QgdXMnLFxyXG4gICAgYnV0dG9uVmFyaWFudDogJ291dGxpbmVkJyxcclxuICB9LFxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gXHJcbiAgICAgey8qIEhlYWQgKi99XHJcbiAgICAgPE5hdmJhci8+XHJcbiAgIFxyXG4gICAgICB7LyogSGVybyB1bml0ICovfVxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIiBjb21wb25lbnQ9XCJtYWluXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9Db250ZW50fT5cclxuXHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDJcIiBhbGlnbj1cImNlbnRlclwiIGNvbG9yPVwidGV4dFByaW1hcnlcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICBCVVRUT05TXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHQgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIj5EZWZhdWx0PC9CdXR0b24+XHJcblx0ICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcblx0ICAgICAgICBQcmltYXJ5XHJcblx0ICAgICAgPC9CdXR0b24+XHJcblx0ICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuXHQgICAgICAgIFNlY29uZGFyeVxyXG5cdCAgICAgIDwvQnV0dG9uPlxyXG5cdCAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGRpc2FibGVkPlxyXG5cdCAgICAgICAgRGlzYWJsZWRcclxuXHQgICAgICA8L0J1dHRvbj5cclxuXHQgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBocmVmPVwiI2NvbnRhaW5lZC1idXR0b25zXCI+XHJcblx0ICAgICAgICBMaW5rXHJcblx0ICAgICAgPC9CdXR0b24+XHJcblx0ICAgIDwvZGl2PlxyXG5cclxuXHQgICAgPGJyLz5cclxuXHJcblxyXG4gICAgICBcdDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImgyXCIgYWxpZ249XCJjZW50ZXJcIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgR1JJRCBYU1xyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0ICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG5cdCAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG5cdCAgICAgICAgICA8c3Bhbj5UZXN0YW5kbyBHUklEPC9zcGFuPlxyXG5cdCAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcblx0ICAgICAgICAgIDxzcGFuPlRlc3RhbmRvIEdSSUQ8L3NwYW4+XHJcblx0ICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuXHQgICAgICAgICAgPHNwYW4+VGVzdGFuZG8gR1JJRDwvc3Bhbj5cclxuXHQgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG5cdCAgICAgICAgICA8c3Bhbj5UZXN0YW5kbyBHUklEPC9zcGFuPlxyXG5cdCAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcblx0ICAgICAgICAgIDxzcGFuPlRlc3RhbmRvIEdSSUQ8L3NwYW4+XHJcblx0ICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuXHQgICAgICAgICAgPHNwYW4+VGVzdGFuZG8gR1JJRDwvc3Bhbj5cclxuXHQgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG5cdCAgICAgICAgICA8c3Bhbj5UZXN0YW5kbyBHUklEPC9zcGFuPlxyXG5cdCAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgIDwvR3JpZD5cclxuXHQgICAgPC9kaXY+XHJcblxyXG5cdCAgICAgPGJyLz5cclxuXHJcblxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImgyXCIgYWxpZ249XCJjZW50ZXJcIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgUHJpY2luZ1xyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBhbGlnbj1cImNlbnRlclwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgIFF1aWNrbHkgYnVpbGQgYW4gZWZmZWN0aXZlIHByaWNpbmcgdGFibGUgZm9yIHlvdXIgcG90ZW50aWFsIGN1c3RvbWVycyB3aXRoIHRoaXMgbGF5b3V0LlxyXG4gICAgICAgICAgSXQmYXBvcztzIGJ1aWx0IHdpdGggZGVmYXVsdCBNYXRlcmlhbC1VSSBjb21wb25lbnRzIHdpdGggbGl0dGxlIGN1c3RvbWl6YXRpb24uXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgIHsvKiBFbmQgaGVybyB1bml0ICovfVxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIiBjb21wb25lbnQ9XCJtYWluXCI+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9IGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiPlxyXG4gICAgICAgICAge3RpZXJzLm1hcCgodGllcikgPT4gKFxyXG4gICAgICAgICAgICAvLyBFbnRlcnByaXNlIGNhcmQgaXMgZnVsbCB3aWR0aCBhdCBzbSBicmVha3BvaW50XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXt0aWVyLnRpdGxlfSB4cz17MTJ9IHNtPXt0aWVyLnRpdGxlID09PSAnRW50ZXJwcmlzZScgPyAxMiA6IDZ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aWVyLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICBzdWJoZWFkZXI9e3RpZXIuc3ViaGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZVR5cG9ncmFwaHlQcm9wcz17eyBhbGlnbjogJ2NlbnRlcicgfX1cclxuICAgICAgICAgICAgICAgICAgc3ViaGVhZGVyVHlwb2dyYXBoeVByb3BzPXt7IGFsaWduOiAnY2VudGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb249e3RpZXIudGl0bGUgPT09ICdQcm8nID8gPFN0YXJJY29uIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRIZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkUHJpY2luZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDJcIiB2YXJpYW50PVwiaDNcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAke3RpZXIucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgL21vXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aWVyLmRlc2NyaXB0aW9uLm1hcCgobGluZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwibGlcIiB2YXJpYW50PVwic3VidGl0bGUxXCIgYWxpZ249XCJjZW50ZXJcIiBrZXk9e2xpbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGluZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gZnVsbFdpZHRoIHZhcmlhbnQ9e3RpZXIuYnV0dG9uVmFyaWFudH0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RpZXIuYnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG5cclxuXHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuIFx0ICB7LyogRm9vdGVyICovfVxyXG4gICAgICA8Rm9vdGVyLz5cclxuXHJcblxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
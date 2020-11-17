webpackHotUpdate_N_E("pages/features",{

/***/ "./pages/features.js":
/*!***************************!*\
  !*** ./pages/features.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");



var _jsxFileName = "C:\\xampp\\htdocs\\arquivos\\javascript\\nextJs\\nextjs-with-materialize-ui\\pages\\features.js",
    _s = $RefreshSig$();












function Copyright() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    children: ['Copyright © ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
      color: "inherit",
      href: "https://material-ui.com/",
      children: "Your Website"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), ' ', new Date().getFullYear(), '.']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

_c = Copyright;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(function (theme) {
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
    },
    footer: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      borderTop: "1px solid ".concat(theme.palette.divider),
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    }, theme.breakpoints.up('sm'), {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    })
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
var footers = [{
  title: 'Company',
  description: ['Team', 'History', 'Contact us', 'Locations']
}, {
  title: 'Features',
  description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one']
}, {
  title: 'Resources',
  description: ['Resource', 'Resource name', 'Another resource', 'Final resource']
}, {
  title: 'Legal',
  description: ['Privacy policy', 'Terms of use']
}];

function Feature() {
  _s();

  var _this = this;

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 6
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      position: "static",
      color: "default",
      elevation: 0,
      className: classes.appBar,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: classes.toolbar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "h6",
          color: "inherit",
          noWrap: true,
          className: classes.toolbarTitle,
          children: "Company name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 14
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("nav", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/features",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
                variant: "button",
                color: "textPrimary",
                className: classes.link,
                children: "Features"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 16
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/enterprise",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
                variant: "button",
                color: "textPrimary",
                className: classes.link,
                children: "Enterprise"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 18
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 16
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/support",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
                variant: "button",
                color: "textPrimary",
                className: classes.link,
                children: "Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 18
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 16
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 14
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          href: "#",
          color: "primary",
          variant: "outlined",
          className: classes.link,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 14
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 12
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
      maxWidth: "sm",
      component: "main",
      className: classes.heroContent,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
        component: "h1",
        variant: "h2",
        align: "center",
        color: "textPrimary",
        gutterBottom: true,
        children: "Feature Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
      maxWidth: "md",
      component: "footer",
      className: classes.footer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Grid, {
        container: true,
        spacing: 4,
        justify: "space-evenly",
        children: footers.map(function (footer) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Grid, {
            item: true,
            xs: 6,
            sm: 3,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
              variant: "h6",
              color: "textPrimary",
              gutterBottom: true,
              children: footer.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 18
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
              children: footer.description.map(function (item) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    href: "#",
                    variant: "subtitle1",
                    color: "textSecondary",
                    children: item
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 24
                  }, _this)
                }, item, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 22
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 18
            }, _this)]
          }, footer.title, true, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 16
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 12
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Box, {
        mt: 5,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Copyright, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 14
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 10
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 4
  }, this);
}

_s(Feature, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c2 = Feature;
/* harmony default export */ __webpack_exports__["default"] = (Feature);

var _c, _c2;

$RefreshReg$(_c, "Copyright");
$RefreshReg$(_c2, "Feature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmVhdHVyZXMuanMiXSwibmFtZXMiOlsiQ29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwidWwiLCJtYXJnaW4iLCJwYWRkaW5nIiwibGlzdFN0eWxlIiwiYXBwQmFyIiwiYm9yZGVyQm90dG9tIiwicGFsZXR0ZSIsImRpdmlkZXIiLCJ0b29sYmFyIiwiZmxleFdyYXAiLCJ0b29sYmFyVGl0bGUiLCJmbGV4R3JvdyIsImxpbmsiLCJzcGFjaW5nIiwiaGVyb0NvbnRlbnQiLCJjYXJkSGVhZGVyIiwiYmFja2dyb3VuZENvbG9yIiwidHlwZSIsImdyZXkiLCJjYXJkUHJpY2luZyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW5Cb3R0b20iLCJmb290ZXIiLCJib3JkZXJUb3AiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImJyZWFrcG9pbnRzIiwidXAiLCJ0aWVycyIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvblRleHQiLCJidXR0b25WYXJpYW50Iiwic3ViaGVhZGVyIiwiZm9vdGVycyIsIkZlYXR1cmUiLCJjbGFzc2VzIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULEdBQXFCO0FBQ25CLHNCQUNFLHFFQUFDLG9FQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLFNBQUssRUFBQyxlQUFsQztBQUFrRCxTQUFLLEVBQUMsUUFBeEQ7QUFBQSxlQUNHLGNBREgsZUFFRSxxRUFBQyw4REFBRDtBQUFNLFdBQUssRUFBQyxTQUFaO0FBQXNCLFVBQUksRUFBQywwQkFBM0I7QUFBQTtB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LHFCQURGLGVBSUU7QUFBQSx3QkFDR1IsTUFBTSxDQUFDVSxXQUFQLENBQW1CTyxHQUFuQixDQUF1QixVQUFDQyxJQUFEO0FBQUEsb0NBQ3RCO0FBQUEseUNBQ0UscUVBQUMsOERBQUQ7QUFBTSx3QkFBSSxFQUFDLEdBQVg7QUFBZSwyQkFBTyxFQUFDLFdBQXZCO0FBQW1DLHlCQUFLLEVBQUMsZUFBekM7QUFBQSw4QkFDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBQVNBLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEc0I7QUFBQSxlQUF2QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQSxhQUE4QmxCLE1BQU0sQ0FBQ1EsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVztBQUFBLFNBQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFtQkUscUVBQUMsR0FBRDtBQUFLLFVBQUUsRUFBRSxDQUFUO0FBQUEsK0JBQ0UscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1Q047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzRUE7O0dBekVRTyxPO1VBQ1ExQyxTOzs7TUFEUjBDLE87QUEyRU1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZlYXR1cmVzLjBhMDY3ZTg2MjA0NTQ1NThhN2I0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5cclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICB7J0NvcHlyaWdodCDCqSAnfVxyXG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XHJcbiAgICAgICAgWW91ciBXZWJzaXRlXHJcbiAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICB7Jy4nfVxyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICdAZ2xvYmFsJzoge1xyXG4gICAgdWw6IHtcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhcHBCYXI6IHtcclxuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxyXG4gIH0sXHJcbiAgdG9vbGJhcjoge1xyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICB9LFxyXG4gIHRvb2xiYXJUaXRsZToge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSwgMS41KSxcclxuICB9LFxyXG4gIGhlcm9Db250ZW50OiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgsIDAsIDYpLFxyXG4gIH0sXHJcbiAgY2FyZEhlYWRlcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOlxyXG4gICAgICB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmdyZXlbMjAwXSA6IHRoZW1lLnBhbGV0dGUuZ3JleVs3MDBdLFxyXG4gIH0sXHJcbiAgY2FyZFByaWNpbmc6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdiYXNlbGluZScsXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBmb290ZXI6IHtcclxuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoNiksXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoNiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHRpZXJzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnRnJlZScsXHJcbiAgICBwcmljZTogJzAnLFxyXG4gICAgZGVzY3JpcHRpb246IFsnMTAgdXNlcnMgaW5jbHVkZWQnLCAnMiBHQiBvZiBzdG9yYWdlJywgJ0hlbHAgY2VudGVyIGFjY2VzcycsICdFbWFpbCBzdXBwb3J0J10sXHJcbiAgICBidXR0b25UZXh0OiAnU2lnbiB1cCBmb3IgZnJlZScsXHJcbiAgICBidXR0b25WYXJpYW50OiAnb3V0bGluZWQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdQcm8nLFxyXG4gICAgc3ViaGVhZGVyOiAnTW9zdCBwb3B1bGFyJyxcclxuICAgIHByaWNlOiAnMTUnLFxyXG4gICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgJzIwIHVzZXJzIGluY2x1ZGVkJyxcclxuICAgICAgJzEwIEdCIG9mIHN0b3JhZ2UnLFxyXG4gICAgICAnSGVscCBjZW50ZXIgYWNjZXNzJyxcclxuICAgICAgJ1ByaW9yaXR5IGVtYWlsIHN1cHBvcnQnLFxyXG4gICAgXSxcclxuICAgIGJ1dHRvblRleHQ6ICdHZXQgc3RhcnRlZCcsXHJcbiAgICBidXR0b25WYXJpYW50OiAnY29udGFpbmVkJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnRW50ZXJwcmlzZScsXHJcbiAgICBwcmljZTogJzMwJyxcclxuICAgIGRlc2NyaXB0aW9uOiBbXHJcbiAgICAgICc1MCB1c2VycyBpbmNsdWRlZCcsXHJcbiAgICAgICczMCBHQiBvZiBzdG9yYWdlJyxcclxuICAgICAgJ0hlbHAgY2VudGVyIGFjY2VzcycsXHJcbiAgICAgICdQaG9uZSAmIGVtYWlsIHN1cHBvcnQnLFxyXG4gICAgXSxcclxuICAgIGJ1dHRvblRleHQ6ICdDb250YWN0IHVzJyxcclxuICAgIGJ1dHRvblZhcmlhbnQ6ICdvdXRsaW5lZCcsXHJcbiAgfSxcclxuXTtcclxuY29uc3QgZm9vdGVycyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0NvbXBhbnknLFxyXG4gICAgZGVzY3JpcHRpb246IFsnVGVhbScsICdIaXN0b3J5JywgJ0NvbnRhY3QgdXMnLCAnTG9jYXRpb25zJ10sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0ZlYXR1cmVzJyxcclxuICAgIGRlc2NyaXB0aW9uOiBbJ0Nvb2wgc3R1ZmYnLCAnUmFuZG9tIGZlYXR1cmUnLCAnVGVhbSBmZWF0dXJlJywgJ0RldmVsb3BlciBzdHVmZicsICdBbm90aGVyIG9uZSddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdSZXNvdXJjZXMnLFxyXG4gICAgZGVzY3JpcHRpb246IFsnUmVzb3VyY2UnLCAnUmVzb3VyY2UgbmFtZScsICdBbm90aGVyIHJlc291cmNlJywgJ0ZpbmFsIHJlc291cmNlJ10sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0xlZ2FsJyxcclxuICAgIGRlc2NyaXB0aW9uOiBbJ1ByaXZhY3kgcG9saWN5JywgJ1Rlcm1zIG9mIHVzZSddLFxyXG4gIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBGZWF0dXJlKCl7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRyZXR1cm4oXHJcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHQgPENzc0Jhc2VsaW5lIC8+XHJcblx0XHRcdCAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjb2xvcj1cImRlZmF1bHRcIiBlbGV2YXRpb249ezB9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJ9PlxyXG5cdFx0XHQgICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cclxuXHRcdFx0ICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIG5vV3JhcCBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhclRpdGxlfT5cclxuXHRcdFx0ICAgICAgICAgICAgQ29tcGFueSBuYW1lXHJcblx0XHRcdCAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblx0XHRcdCAgICAgICAgICA8bmF2PlxyXG5cdFx0XHQgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9mZWF0dXJlc1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICA8YT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgIDxMaW5rIHZhcmlhbnQ9XCJidXR0b25cIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICBGZWF0dXJlc1xyXG5cdFx0XHRcdCAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cdFx0XHQgICAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuXHRcdFx0ICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvZW50ZXJwcmlzZVwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxhPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgPExpbmsgdmFyaWFudD1cImJ1dHRvblwiIGNvbG9yPVwidGV4dFByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgIEVudGVycHJpc2VcclxuXHRcdFx0XHRcdCAgICAgICAgICAgIDwvTGluaz5cclxuXHRcdFx0XHQgICAgICAgICAgICA8L2E+XHJcblx0XHRcdCAgICAgICAgICAgIDwvTmV4dExpbms+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9zdXBwb3J0XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgPGE+XHJcblx0XHRcdFx0ICAgICAgICAgICAgPExpbmsgdmFyaWFudD1cImJ1dHRvblwiIGNvbG9yPVwidGV4dFByaW1hcnlcIiAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgU3VwcG9ydFxyXG5cdFx0XHRcdCAgICAgICAgICAgIDwvTGluaz5cclxuXHRcdFx0ICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdCAgICAgICAgICAgIDwvTmV4dExpbms+XHJcblx0XHRcdCAgICAgICAgICA8L25hdj5cclxuXHRcdFx0ICAgICAgICAgIDxCdXR0b24gaHJlZj1cIiNcIiBjb2xvcj1cInByaW1hcnlcIiB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XHJcblx0XHRcdCAgICAgICAgICAgIExvZ2luXHJcblx0XHRcdCAgICAgICAgICA8L0J1dHRvbj5cclxuXHRcdFx0ICAgICAgICA8L1Rvb2xiYXI+XHJcblx0XHRcdCAgICAgIDwvQXBwQmFyPlxyXG5cclxuXHRcdFx0ICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiIGNvbXBvbmVudD1cIm1haW5cIiBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0NvbnRlbnR9PlxyXG5cdFx0XHQgICAgICAgXHQgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoMlwiIGFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiIGd1dHRlckJvdHRvbT5cclxuXHRcdFx0XHQgICAgICAgICAgRmVhdHVyZSBQYWdlXHJcblx0XHRcdFx0ICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblx0XHRcdCAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcblx0XHRcdCAgICAgICB7LyogRm9vdGVyICovfVxyXG5cdFx0XHQgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIiBjb21wb25lbnQ9XCJmb290ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuXHRcdFx0ICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0ganVzdGlmeT1cInNwYWNlLWV2ZW5seVwiPlxyXG5cdFx0XHQgICAgICAgICAge2Zvb3RlcnMubWFwKChmb290ZXIpID0+IChcclxuXHRcdFx0ICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezN9IGtleT17Zm9vdGVyLnRpdGxlfT5cclxuXHRcdFx0ICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgZ3V0dGVyQm90dG9tPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAge2Zvb3Rlci50aXRsZX1cclxuXHRcdFx0ICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblx0XHRcdCAgICAgICAgICAgICAgPHVsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAge2Zvb3Rlci5kZXNjcmlwdGlvbi5tYXAoKGl0ZW0pID0+IChcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbX0+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICApKX1cclxuXHRcdFx0ICAgICAgICAgICAgICA8L3VsPlxyXG5cdFx0XHQgICAgICAgICAgICA8L0dyaWQ+XHJcblx0XHRcdCAgICAgICAgICApKX1cclxuXHRcdFx0ICAgICAgICA8L0dyaWQ+XHJcblx0XHRcdCAgICAgICAgPEJveCBtdD17NX0+XHJcblx0XHRcdCAgICAgICAgICA8Q29weXJpZ2h0IC8+XHJcblx0XHRcdCAgICAgICAgPC9Cb3g+XHJcblx0XHRcdCAgICAgIDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZSJdLCJzb3VyY2VSb290IjoiIn0=
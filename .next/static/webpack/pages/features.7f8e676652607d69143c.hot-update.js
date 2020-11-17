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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmVhdHVyZXMuanMiXSwibmFtZXMiOlsiQ29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwidWwiLCJtYXJnaW4iLCJwYWRkaW5nIiwibGlzdFN0eWxlIiwiYXBwQmFyIiwiYm9yZGVyQm90dG9tIiwicGFsZXR0ZSIsImRpdmlkZXIiLCJ0b29sYmFyIiwiZmxleFdyYXAiLCJ0b29sYmFyVGl0bGUiLCJmbGV4R3JvdyIsImxpbmsiLCJzcGFjaW5nIiwiaGVyb0NvbnRlbnQiLCJjYXJkSGVhZGVyIiwiYmFja2dyb3VuZENvbG9yIiwidHlwZSIsImdyZXkiLCJjYXJkUHJpY2luZyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW5Cb3R0b20iLCJmb290ZXIiLCJib3JkZXJUb3AiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImJyZWFrcG9pbnRzIiwidXAiLCJ0aWVycyIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvblRleHQiLCJidXR0b25WYXJpYW50Iiwic3ViaGVhZGVyIiwiZm9vdGVycyIsIkZlYXR1cmUiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkIsc0JBQ0UscUVBQUMsb0VBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsU0FBSyxFQUFDLGVBQWxDO0FBQWtELFNBQUssRUFBQyxRQUF4RDtBQUFBLGVBQ0csY0FESCxlQUVFLHFFQUFDLDhEQUFEO0FBQU0sV0FBSyxFQUFDLFNBQVo7QUFBc0IsVUFBSSxFQUFDLDBCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFB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QUF2QjtBQUFpQyxpQkFBTyxFQUFDLFVBQXpDO0FBQW9ELG1CQUFTLEVBQUU0QixPQUFPLENBQUM1QixJQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZOLGVBcUNPLHFFQUFDLG9FQUFEO0FBQVcsY0FBUSxFQUFDLElBQXBCO0FBQXlCLGVBQVMsRUFBQyxNQUFuQztBQUEwQyxlQUFTLEVBQUU0QixPQUFPLENBQUMxQixXQUE3RDtBQUFBLDZCQUNJLHFFQUFDLG9FQUFEO0FBQVksaUJBQVMsRUFBQyxJQUF0QjtBQUEyQixlQUFPLEVBQUMsSUFBbkM7QUFBd0MsYUFBSyxFQUFDLFFBQTlDO0FBQXVELGFBQUssRUFBQyxhQUE3RDtBQUEyRSxvQkFBWSxNQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQ1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2Q0E7O0dBaERReUIsTztVQUNRMUMsUzs7O01BRFIwQyxPO0FBa0RNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mZWF0dXJlcy43ZjhlNjc2NjUyNjA3ZDY5MTQzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuXHJcbmZ1bmN0aW9uIENvcHlyaWdodCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgeydDb3B5cmlnaHQgwqkgJ31cclxuICAgICAgPExpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cImh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL1wiPlxyXG4gICAgICAgIFlvdXIgV2Vic2l0ZVxyXG4gICAgICA8L0xpbms+eycgJ31cclxuICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cclxuICAgICAgeycuJ31cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAnQGdsb2JhbCc6IHtcclxuICAgIHVsOiB7XHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYXBwQmFyOiB7XHJcbiAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YCxcclxuICB9LFxyXG4gIHRvb2xiYXI6IHtcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgfSxcclxuICB0b29sYmFyVGl0bGU6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEsIDEuNSksXHJcbiAgfSxcclxuICBoZXJvQ29udGVudDoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCAwLCA2KSxcclxuICB9LFxyXG4gIGNhcmRIZWFkZXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjpcclxuICAgICAgdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gdGhlbWUucGFsZXR0ZS5ncmV5WzIwMF0gOiB0aGVtZS5wYWxldHRlLmdyZXlbNzAwXSxcclxuICB9LFxyXG4gIGNhcmRQcmljaW5nOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgZm9vdGVyOiB7XHJcbiAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YCxcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDYpLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDYpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCB0aWVycyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0ZyZWUnLFxyXG4gICAgcHJpY2U6ICcwJyxcclxuICAgIGRlc2NyaXB0aW9uOiBbJzEwIHVzZXJzIGluY2x1ZGVkJywgJzIgR0Igb2Ygc3RvcmFnZScsICdIZWxwIGNlbnRlciBhY2Nlc3MnLCAnRW1haWwgc3VwcG9ydCddLFxyXG4gICAgYnV0dG9uVGV4dDogJ1NpZ24gdXAgZm9yIGZyZWUnLFxyXG4gICAgYnV0dG9uVmFyaWFudDogJ291dGxpbmVkJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnUHJvJyxcclxuICAgIHN1YmhlYWRlcjogJ01vc3QgcG9wdWxhcicsXHJcbiAgICBwcmljZTogJzE1JyxcclxuICAgIGRlc2NyaXB0aW9uOiBbXHJcbiAgICAgICcyMCB1c2VycyBpbmNsdWRlZCcsXHJcbiAgICAgICcxMCBHQiBvZiBzdG9yYWdlJyxcclxuICAgICAgJ0hlbHAgY2VudGVyIGFjY2VzcycsXHJcbiAgICAgICdQcmlvcml0eSBlbWFpbCBzdXBwb3J0JyxcclxuICAgIF0sXHJcbiAgICBidXR0b25UZXh0OiAnR2V0IHN0YXJ0ZWQnLFxyXG4gICAgYnV0dG9uVmFyaWFudDogJ2NvbnRhaW5lZCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0VudGVycHJpc2UnLFxyXG4gICAgcHJpY2U6ICczMCcsXHJcbiAgICBkZXNjcmlwdGlvbjogW1xyXG4gICAgICAnNTAgdXNlcnMgaW5jbHVkZWQnLFxyXG4gICAgICAnMzAgR0Igb2Ygc3RvcmFnZScsXHJcbiAgICAgICdIZWxwIGNlbnRlciBhY2Nlc3MnLFxyXG4gICAgICAnUGhvbmUgJiBlbWFpbCBzdXBwb3J0JyxcclxuICAgIF0sXHJcbiAgICBidXR0b25UZXh0OiAnQ29udGFjdCB1cycsXHJcbiAgICBidXR0b25WYXJpYW50OiAnb3V0bGluZWQnLFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IGZvb3RlcnMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdDb21wYW55JyxcclxuICAgIGRlc2NyaXB0aW9uOiBbJ1RlYW0nLCAnSGlzdG9yeScsICdDb250YWN0IHVzJywgJ0xvY2F0aW9ucyddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdGZWF0dXJlcycsXHJcbiAgICBkZXNjcmlwdGlvbjogWydDb29sIHN0dWZmJywgJ1JhbmRvbSBmZWF0dXJlJywgJ1RlYW0gZmVhdHVyZScsICdEZXZlbG9wZXIgc3R1ZmYnLCAnQW5vdGhlciBvbmUnXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnUmVzb3VyY2VzJyxcclxuICAgIGRlc2NyaXB0aW9uOiBbJ1Jlc291cmNlJywgJ1Jlc291cmNlIG5hbWUnLCAnQW5vdGhlciByZXNvdXJjZScsICdGaW5hbCByZXNvdXJjZSddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdMZWdhbCcsXHJcbiAgICBkZXNjcmlwdGlvbjogWydQcml2YWN5IHBvbGljeScsICdUZXJtcyBvZiB1c2UnXSxcclxuICB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gRmVhdHVyZSgpe1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRcclxuXHRyZXR1cm4oXHJcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHQgPENzc0Jhc2VsaW5lIC8+XHJcblx0XHRcdCAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjb2xvcj1cImRlZmF1bHRcIiBlbGV2YXRpb249ezB9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJ9PlxyXG5cdFx0XHQgICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cclxuXHRcdFx0ICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIG5vV3JhcCBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhclRpdGxlfT5cclxuXHRcdFx0ICAgICAgICAgICAgQ29tcGFueSBuYW1lXHJcblx0XHRcdCAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblx0XHRcdCAgICAgICAgICA8bmF2PlxyXG5cdFx0XHQgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9mZWF0dXJlc1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICA8YT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgIDxMaW5rIHZhcmlhbnQ9XCJidXR0b25cIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICBGZWF0dXJlc1xyXG5cdFx0XHRcdCAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cdFx0XHQgICAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuXHRcdFx0ICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvZW50ZXJwcmlzZVwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxhPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgPExpbmsgdmFyaWFudD1cImJ1dHRvblwiIGNvbG9yPVwidGV4dFByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgIEVudGVycHJpc2VcclxuXHRcdFx0XHRcdCAgICAgICAgICAgIDwvTGluaz5cclxuXHRcdFx0XHQgICAgICAgICAgICA8L2E+XHJcblx0XHRcdCAgICAgICAgICAgIDwvTmV4dExpbms+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9zdXBwb3J0XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgPGE+XHJcblx0XHRcdFx0ICAgICAgICAgICAgPExpbmsgdmFyaWFudD1cImJ1dHRvblwiIGNvbG9yPVwidGV4dFByaW1hcnlcIiAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgU3VwcG9ydFxyXG5cdFx0XHRcdCAgICAgICAgICAgIDwvTGluaz5cclxuXHRcdFx0ICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdCAgICAgICAgICAgIDwvTmV4dExpbms+XHJcblx0XHRcdCAgICAgICAgICA8L25hdj5cclxuXHRcdFx0ICAgICAgICAgIDxCdXR0b24gaHJlZj1cIiNcIiBjb2xvcj1cInByaW1hcnlcIiB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XHJcblx0XHRcdCAgICAgICAgICAgIExvZ2luXHJcblx0XHRcdCAgICAgICAgICA8L0J1dHRvbj5cclxuXHRcdFx0ICAgICAgICA8L1Rvb2xiYXI+XHJcblx0XHRcdCAgICAgIDwvQXBwQmFyPlxyXG5cclxuXHRcdFx0ICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiIGNvbXBvbmVudD1cIm1haW5cIiBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0NvbnRlbnR9PlxyXG5cdFx0XHQgICAgICAgXHQgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoMlwiIGFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiIGd1dHRlckJvdHRvbT5cclxuXHRcdFx0XHQgICAgICAgICAgRmVhdHVyZSBQYWdlXHJcblx0XHRcdFx0ICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblx0XHRcdCAgICAgICA8L0NvbnRhaW5lcj5cclxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmUiXSwic291cmNlUm9vdCI6IiJ9
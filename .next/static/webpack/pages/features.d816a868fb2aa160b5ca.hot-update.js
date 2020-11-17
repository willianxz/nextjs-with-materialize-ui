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


var _jsxFileName = "C:\\xampp\\htdocs\\arquivos\\javascript\\nextJs\\nextjs-with-materialize-ui\\pages\\features.js";











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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
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
          lineNumber: 130,
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
                lineNumber: 136,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
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
                lineNumber: 143,
                columnNumber: 18
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
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
                lineNumber: 151,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 18
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 16
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 14
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          href: "#",
          color: "primary",
          variant: "outlined",
          className: classes.link,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 14
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 12
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
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
        lineNumber: 164,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 4
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmVhdHVyZXMuanMiXSwibmFtZXMiOlsiQ29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwidWwiLCJtYXJnaW4iLCJwYWRkaW5nIiwibGlzdFN0eWxlIiwiYXBwQmFyIiwiYm9yZGVyQm90dG9tIiwicGFsZXR0ZSIsImRpdmlkZXIiLCJ0b29sYmFyIiwiZmxleFdyYXAiLCJ0b29sYmFyVGl0bGUiLCJmbGV4R3JvdyIsImxpbmsiLCJzcGFjaW5nIiwiaGVyb0NvbnRlbnQiLCJjYXJkSGVhZGVyIiwiYmFja2dyb3VuZENvbG9yIiwidHlwZSIsImdyZXkiLCJjYXJkUHJpY2luZyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW5Cb3R0b20iLCJmb290ZXIiLCJib3JkZXJUb3AiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImJyZWFrcG9pbnRzIiwidXAiLCJ0aWVycyIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvblRleHQiLCJidXR0b25WYXJpYW50Iiwic3ViaGVhZGVyIiwiZm9vdGVycyIsIkZlYXR1cmUiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkIsc0JBQ0UscUVBQUMsb0VBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsU0FBSyxFQUFDLGVBQWxDO0FBQWtELFNBQUssRUFBQyxRQUF4RDtBQUFBLGVBQ0csY0FESCxlQUVFLHFFQUFDLDhEQUFEO0FBQU0sV0FBSyxFQUFDLFNBQVo7QUFBc0IsVUFBSSxFQUFDLDBCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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NEIsT0FBTyxDQUFDNUIsSUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGTixlQXFDTyxxRUFBQyxvRUFBRDtBQUFXLGNBQVEsRUFBQyxJQUFwQjtBQUF5QixlQUFTLEVBQUMsTUFBbkM7QUFBMEMsZUFBUyxFQUFFNEIsT0FBTyxDQUFDMUIsV0FBN0Q7QUFBQSw2QkFDSSxxRUFBQyxvRUFBRDtBQUFZLGlCQUFTLEVBQUMsSUFBdEI7QUFBMkIsZUFBTyxFQUFDLElBQW5DO0FBQXdDLGFBQUssRUFBQyxRQUE5QztBQUF1RCxhQUFLLEVBQUMsYUFBN0Q7QUFBMkUsb0JBQVksTUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkNBOztNQTlDUXlCLE87QUFnRE1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZlYXR1cmVzLmQ4MTZhODY4ZmIyYWExNjBiNWNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5cclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICB7J0NvcHlyaWdodCDCqSAnfVxyXG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XHJcbiAgICAgICAgWW91ciBXZWJzaXRlXHJcbiAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICB7Jy4nfVxyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICdAZ2xvYmFsJzoge1xyXG4gICAgdWw6IHtcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhcHBCYXI6IHtcclxuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxyXG4gIH0sXHJcbiAgdG9vbGJhcjoge1xyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICB9LFxyXG4gIHRvb2xiYXJUaXRsZToge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSwgMS41KSxcclxuICB9LFxyXG4gIGhlcm9Db250ZW50OiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgsIDAsIDYpLFxyXG4gIH0sXHJcbiAgY2FyZEhlYWRlcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOlxyXG4gICAgICB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmdyZXlbMjAwXSA6IHRoZW1lLnBhbGV0dGUuZ3JleVs3MDBdLFxyXG4gIH0sXHJcbiAgY2FyZFByaWNpbmc6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdiYXNlbGluZScsXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBmb290ZXI6IHtcclxuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoNiksXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoNiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHRpZXJzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnRnJlZScsXHJcbiAgICBwcmljZTogJzAnLFxyXG4gICAgZGVzY3JpcHRpb246IFsnMTAgdXNlcnMgaW5jbHVkZWQnLCAnMiBHQiBvZiBzdG9yYWdlJywgJ0hlbHAgY2VudGVyIGFjY2VzcycsICdFbWFpbCBzdXBwb3J0J10sXHJcbiAgICBidXR0b25UZXh0OiAnU2lnbiB1cCBmb3IgZnJlZScsXHJcbiAgICBidXR0b25WYXJpYW50OiAnb3V0bGluZWQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdQcm8nLFxyXG4gICAgc3ViaGVhZGVyOiAnTW9zdCBwb3B1bGFyJyxcclxuICAgIHByaWNlOiAnMTUnLFxyXG4gICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgJzIwIHVzZXJzIGluY2x1ZGVkJyxcclxuICAgICAgJzEwIEdCIG9mIHN0b3JhZ2UnLFxyXG4gICAgICAnSGVscCBjZW50ZXIgYWNjZXNzJyxcclxuICAgICAgJ1ByaW9yaXR5IGVtYWlsIHN1cHBvcnQnLFxyXG4gICAgXSxcclxuICAgIGJ1dHRvblRleHQ6ICdHZXQgc3RhcnRlZCcsXHJcbiAgICBidXR0b25WYXJpYW50OiAnY29udGFpbmVkJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnRW50ZXJwcmlzZScsXHJcbiAgICBwcmljZTogJzMwJyxcclxuICAgIGRlc2NyaXB0aW9uOiBbXHJcbiAgICAgICc1MCB1c2VycyBpbmNsdWRlZCcsXHJcbiAgICAgICczMCBHQiBvZiBzdG9yYWdlJyxcclxuICAgICAgJ0hlbHAgY2VudGVyIGFjY2VzcycsXHJcbiAgICAgICdQaG9uZSAmIGVtYWlsIHN1cHBvcnQnLFxyXG4gICAgXSxcclxuICAgIGJ1dHRvblRleHQ6ICdDb250YWN0IHVzJyxcclxuICAgIGJ1dHRvblZhcmlhbnQ6ICdvdXRsaW5lZCcsXHJcbiAgfSxcclxuXTtcclxuY29uc3QgZm9vdGVycyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0NvbXBhbnknLFxyXG4gICAgZGVzY3JpcHRpb246IFsnVGVhbScsICdIaXN0b3J5JywgJ0NvbnRhY3QgdXMnLCAnTG9jYXRpb25zJ10sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0ZlYXR1cmVzJyxcclxuICAgIGRlc2NyaXB0aW9uOiBbJ0Nvb2wgc3R1ZmYnLCAnUmFuZG9tIGZlYXR1cmUnLCAnVGVhbSBmZWF0dXJlJywgJ0RldmVsb3BlciBzdHVmZicsICdBbm90aGVyIG9uZSddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdSZXNvdXJjZXMnLFxyXG4gICAgZGVzY3JpcHRpb246IFsnUmVzb3VyY2UnLCAnUmVzb3VyY2UgbmFtZScsICdBbm90aGVyIHJlc291cmNlJywgJ0ZpbmFsIHJlc291cmNlJ10sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0xlZ2FsJyxcclxuICAgIGRlc2NyaXB0aW9uOiBbJ1ByaXZhY3kgcG9saWN5JywgJ1Rlcm1zIG9mIHVzZSddLFxyXG4gIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBGZWF0dXJlKCl7XHJcblx0cmV0dXJuKFxyXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0IDxDc3NCYXNlbGluZSAvPlxyXG5cdFx0XHQgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY29sb3I9XCJkZWZhdWx0XCIgZWxldmF0aW9uPXswfSBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfT5cclxuXHRcdFx0ICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XHJcblx0XHRcdCAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBub1dyYXAgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJUaXRsZX0+XHJcblx0XHRcdCAgICAgICAgICAgIENvbXBhbnkgbmFtZVxyXG5cdFx0XHQgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHQgICAgICAgICAgPG5hdj5cclxuXHRcdFx0ICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvZmVhdHVyZXNcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgPGE+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICA8TGluayB2YXJpYW50PVwiYnV0dG9uXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgRmVhdHVyZXNcclxuXHRcdFx0XHQgICAgICAgICAgICAgIDwvTGluaz5cclxuXHRcdFx0ICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdCAgICAgICAgICAgIDwvTmV4dExpbms+XHJcblx0XHRcdCAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2VudGVycHJpc2VcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICA8YT5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgIDxMaW5rIHZhcmlhbnQ9XCJidXR0b25cIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICBFbnRlcnByaXNlXHJcblx0XHRcdFx0XHQgICAgICAgICAgICA8L0xpbms+XHJcblx0XHRcdFx0ICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICA8L05leHRMaW5rPlxyXG5cclxuXHRcdFx0ICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvc3VwcG9ydFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgIDxhPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxMaW5rIHZhcmlhbnQ9XCJidXR0b25cIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgIFN1cHBvcnRcclxuXHRcdFx0XHQgICAgICAgICAgICA8L0xpbms+XHJcblx0XHRcdCAgICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICA8L05leHRMaW5rPlxyXG5cdFx0XHQgICAgICAgICAgPC9uYXY+XHJcblx0XHRcdCAgICAgICAgICA8QnV0dG9uIGhyZWY9XCIjXCIgY29sb3I9XCJwcmltYXJ5XCIgdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG5cdFx0XHQgICAgICAgICAgICBMb2dpblxyXG5cdFx0XHQgICAgICAgICAgPC9CdXR0b24+XHJcblx0XHRcdCAgICAgICAgPC9Ub29sYmFyPlxyXG5cdFx0XHQgICAgICA8L0FwcEJhcj5cclxuXHJcblx0XHRcdCAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIiBjb21wb25lbnQ9XCJtYWluXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9Db250ZW50fT5cclxuXHRcdFx0ICAgICAgIFx0ICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDJcIiBhbGlnbj1cImNlbnRlclwiIGNvbG9yPVwidGV4dFByaW1hcnlcIiBndXR0ZXJCb3R0b20+XHJcblx0XHRcdFx0ICAgICAgICAgIEZlYXR1cmUgUGFnZVxyXG5cdFx0XHRcdCAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHQgICAgICAgPC9Db250YWluZXI+XHJcblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==
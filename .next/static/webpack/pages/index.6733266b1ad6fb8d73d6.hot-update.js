webpackHotUpdate_N_E("pages/index",{

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");



var _jsxFileName = "C:\\xampp\\htdocs\\arquivos\\javascript\\nextJs\\nextjs-with-materialize-ui\\src\\footer.js",
    _s = $RefreshSig$();







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
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

function Copyright() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    children: ['Copyright © ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Link, {
      color: "inherit",
      href: "https://material-ui.com/",
      children: "Your Website"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), ' ', new Date().getFullYear(), '.']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

_c = Copyright;
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

function Footer() {
  _s();

  var _this = this;

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
      maxWidth: "md",
      component: "footer",
      className: classes.footer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        container: true,
        spacing: 4,
        justify: "space-evenly",
        children: footers.map(function (footer) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
            item: true,
            xs: 6,
            sm: 3,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
              variant: "h6",
              color: "textPrimary",
              gutterBottom: true,
              children: footer.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 18
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
              children: footer.description.map(function (item) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Link, {
                    href: "#",
                    variant: "subtitle1",
                    color: "textSecondary",
                    children: item
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 24
                  }, _this)
                }, item, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 22
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 18
            }, _this)]
          }, footer.title, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 16
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 12
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
        mt: 5,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Copyright, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 14
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 6
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 3
  }, this);
}

_s(Footer, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c2 = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c, _c2;

$RefreshReg$(_c, "Copyright");
$RefreshReg$(_c2, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmb290ZXIiLCJib3JkZXJUb3AiLCJwYWxldHRlIiwiZGl2aWRlciIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImJyZWFrcG9pbnRzIiwidXAiLCJDb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJmb290ZXJzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkZvb3RlciIsImNsYXNzZXMiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFVBQU0sRUFBRTtBQUNOQyxlQUFTLHNCQUFlRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsT0FBN0IsQ0FETDtBQUVKQyxlQUFTLEVBQUVMLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FGUDtBQUdKQyxnQkFBVSxFQUFFUCxLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkLENBSFI7QUFJSkUsbUJBQWEsRUFBRVIsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZDtBQUpYLE9BS0hOLEtBQUssQ0FBQ1MsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FMRyxFQUswQjtBQUM1QkgsZ0JBQVUsRUFBRVAsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZCxDQURnQjtBQUU1QkUsbUJBQWEsRUFBRVIsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZDtBQUZhLEtBTDFCO0FBRGlDLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQWFBLFNBQVNLLFNBQVQsR0FBcUI7QUFDbkIsc0JBQ0UscUVBQUMsb0VBQUQ7QUFBWSxXQUFPLEVBQUMs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QUFnQ01BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY3MzMyNjZiMWFkNmZiOGQ3M2Q2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHsgIFxyXG4gIGZvb3Rlcjoge1xyXG4gICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5kaXZpZGVyfWAsXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg2KSxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg2KSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICB7J0NvcHlyaWdodCDCqSAnfVxyXG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XHJcbiAgICAgICAgWW91ciBXZWJzaXRlXHJcbiAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICB7Jy4nfVxyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgZm9vdGVycyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0NvbXBhbnknLFxyXG4gICAgZGVzY3JpcHRpb246IFsnVGVhbScsICdIaXN0b3J5JywgJ0NvbnRhY3QgdXMnLCAnTG9jYXRpb25zJ10sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0ZlYXR1cmVzJyxcclxuICAgIGRlc2NyaXB0aW9uOiBbJ0Nvb2wgc3R1ZmYnLCAnUmFuZG9tIGZlYXR1cmUnLCAnVGVhbSBmZWF0dXJlJywgJ0RldmVsb3BlciBzdHVmZicsICdBbm90aGVyIG9uZSddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdSZXNvdXJjZXMnLFxyXG4gICAgZGVzY3JpcHRpb246IFsnUmVzb3VyY2UnLCAnUmVzb3VyY2UgbmFtZScsICdBbm90aGVyIHJlc291cmNlJywgJ0ZpbmFsIHJlc291cmNlJ10sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0xlZ2FsJyxcclxuICAgIGRlc2NyaXB0aW9uOiBbJ1ByaXZhY3kgcG9saWN5JywgJ1Rlcm1zIG9mIHVzZSddLFxyXG4gIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBGb290ZXIoKXtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG5cdHJldHVybihcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0ICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIiBjb21wb25lbnQ9XCJmb290ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuXHRcdFx0ICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0ganVzdGlmeT1cInNwYWNlLWV2ZW5seVwiPlxyXG5cdFx0XHQgICAgICAgICAge2Zvb3RlcnMubWFwKChmb290ZXIpID0+IChcclxuXHRcdFx0ICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezN9IGtleT17Zm9vdGVyLnRpdGxlfT5cclxuXHRcdFx0ICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgZ3V0dGVyQm90dG9tPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAge2Zvb3Rlci50aXRsZX1cclxuXHRcdFx0ICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblx0XHRcdCAgICAgICAgICAgICAgPHVsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAge2Zvb3Rlci5kZXNjcmlwdGlvbi5tYXAoKGl0ZW0pID0+IChcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbX0+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICApKX1cclxuXHRcdFx0ICAgICAgICAgICAgICA8L3VsPlxyXG5cdFx0XHQgICAgICAgICAgICA8L0dyaWQ+XHJcblx0XHRcdCAgICAgICAgICApKX1cclxuXHRcdFx0ICAgICAgICA8L0dyaWQ+XHJcblx0XHRcdCAgICAgICAgPEJveCBtdD17NX0+XHJcblx0XHRcdCAgICAgICAgICA8Q29weXJpZ2h0IC8+XHJcblx0XHRcdCAgICAgICAgPC9Cb3g+XHJcblx0XHQgICAgICA8L0NvbnRhaW5lcj5cdFx0XHQgICAgICBcclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==
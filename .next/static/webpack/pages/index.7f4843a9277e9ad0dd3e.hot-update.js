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
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ "./node_modules/@material-ui/icons/StarBorder.js");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");


var _jsxFileName = "C:\\xampp\\htdocs\\arquivos\\javascript\\nextJs\\nextjs-with-materialize-ui\\pages\\index.js",
    _s = $RefreshSig$();


















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__["makeStyles"])(function (theme) {
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      position: "static",
      color: "default",
      elevation: 0,
      className: classes.appBar,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.toolbar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
          variant: "h6",
          color: "inherit",
          noWrap: true,
          className: classes.toolbarTitle,
          children: "Company name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_15__["default"], {
                variant: "button",
                color: "textPrimary",
                className: classes.link,
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 16
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 16
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/features",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_15__["default"], {
                variant: "button",
                color: "textPrimary",
                className: classes.link,
                children: "Features"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 16
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 16
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/enterprise",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_15__["default"], {
                variant: "button",
                color: "textPrimary",
                className: classes.link,
                children: "Enterprise"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 14
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/support",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_15__["default"], {
                variant: "button",
                color: "textPrimary",
                className: classes.link,
                children: "Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 14
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          href: "#",
          color: "primary",
          variant: "outlined",
          className: classes.link,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_17__["default"], {
      maxWidth: "sm",
      component: "main",
      className: classes.heroContent,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        component: "h1",
        variant: "h2",
        align: "center",
        color: "textPrimary",
        gutterBottom: true,
        children: "BUTTONS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.root,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "contained",
          children: "Default"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 8
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "contained",
          color: "primary",
          children: "Primary"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 8
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "contained",
          color: "secondary",
          children: "Secondary"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 8
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "contained",
          disabled: true,
          children: "Disabled"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 8
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "contained",
          color: "primary",
          href: "#contained-buttons",
          children: "Link"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 8
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 6
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        component: "h1",
        variant: "h2",
        align: "center",
        color: "textPrimary",
        gutterBottom: true,
        children: "GRID XS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.root,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
          container: true,
          spacing: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
            item: true,
            xs: 12,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
            item: true,
            xs: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
            item: true,
            xs: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
            item: true,
            xs: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
            item: true,
            xs: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
            item: true,
            xs: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
            item: true,
            xs: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 10
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 8
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        component: "h1",
        variant: "h2",
        align: "center",
        color: "textPrimary",
        gutterBottom: true,
        children: "Pricing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "h5",
        align: "center",
        color: "textSecondary",
        component: "p",
        children: "Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_17__["default"], {
      maxWidth: "md",
      component: "main",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        container: true,
        spacing: 5,
        alignItems: "flex-end",
        children: tiers.map(function (tier) {
          return (
            /*#__PURE__*/
            // Enterprise card is full width at sm breakpoint
            Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
              item: true,
              xs: 12,
              sm: tier.title === 'Enterprise' ? 12 : 6,
              md: 4,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  title: tier.title,
                  subheader: tier.subheader,
                  titleTypographyProps: {
                    align: 'center'
                  },
                  subheaderTypographyProps: {
                    align: 'center'
                  },
                  action: tier.title === 'Pro' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_12___default.a, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 50
                  }, _this) : null,
                  className: classes.cardHeader
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: classes.cardPricing,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
                      component: "h2",
                      variant: "h3",
                      color: "textPrimary",
                      children: ["$", tier.price]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 228,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
                      variant: "h6",
                      color: "textSecondary",
                      children: "/mo"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 231,
                      columnNumber: 21
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                    children: tier.description.map(function (line) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
                        component: "li",
                        variant: "subtitle1",
                        align: "center",
                        children: line
                      }, line, false, {
                        fileName: _jsxFileName,
                        lineNumber: 237,
                        columnNumber: 23
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 19
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    fullWidth: true,
                    variant: tier.buttonVariant,
                    color: "primary",
                    children: tier.buttonText
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 19
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 15
              }, _this)
            }, tier.title, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 13
            }, _this)
          );
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 99,
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

/***/ }),

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



var _jsxFileName = "C:\\xampp\\htdocs\\arquivos\\javascript\\nextJs\\nextjs-with-materialize-ui\\src\\footer.js",
    _s = $RefreshSig$();






var useStyles = makeStyles(function (theme) {
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
      lineNumber: 25,
      columnNumber: 7
    }, this), ' ', new Date().getFullYear(), '.']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
              lineNumber: 64,
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
                    lineNumber: 70,
                    columnNumber: 24
                  }, _this)
                }, item, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 22
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 18
            }, _this)]
          }, footer.title, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 16
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 12
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
        mt: 5,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Copyright, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 14
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 6
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mb290ZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwidWwiLCJtYXJnaW4iLCJwYWRkaW5nIiwibGlzdFN0eWxlIiwiYXBwQmFyIiwiYm9yZGVyQm90dG9tIiwicGFsZXR0ZSIsImRpdmlkZXIiLCJ0b29sYmFyIiwiZmxleFdyYXAiLCJ0b29sYmFyVGl0bGUiLCJmbGV4R3JvdyIsImxpbmsiLCJzcGFjaW5nIiwiaGVyb0NvbnRlbnQiLCJjYXJkSGVhZGVyIiwiYmFja2dyb3VuZENvbG9yIiwidHlwZSIsImdyZXkiLCJjYXJkUHJpY2luZyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW5Cb3R0b20iLCJ0aWVycyIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvblRleHQiLCJidXR0b25WYXJpYW50Iiwic3ViaGVhZGVyIiwiSG9tZSIsImNsYXNzZXMiLCJyb290IiwibWFwIiwidGllciIsImFsaWduIiwibGluZSIsImZvb3RlciIsImJvcmRlclRvcCIsIm1hcmdpblRvcCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImZvb3RlcnMiLCJGb290ZXIiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBTUEsU0FBUyxHQUFHQyw0RUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDLGVBQVc7QUFDVEMsUUFBRSxFQUFFO0FBQ0ZD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TUFBTSxDQUFDYjtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFBLHdCQUNHYSxNQUFNLENBQUNYLFdBQVAsQ0FBbUJPLEdBQW5CLENBQXVCLFVBQUNnQixJQUFEO0FBQUEsb0NBQ3RCO0FBQUEseUNBQ0UscUVBQUMsSUFBRDtBQUFNLHdCQUFJLEVBQUMsR0FBWDtBQUFlLDJCQUFPLEVBQUMsV0FBdkI7QUFBbUMseUJBQUssRUFBQyxlQUF6QztBQUFBLDhCQUNHQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFBU0EsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURzQjtBQUFBLGVBQXZCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBLGFBQThCWixNQUFNLENBQUNiLEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFc7QUFBQSxTQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUROLGVBbUJNLHFFQUFDLDZEQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBQSwrQkFDRSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTJCQTs7R0E5QlF3QixNO1VBQ1FwRCxTOzs7TUFEUm9ELE07QUFnQ01BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdmNDg0M2E5Mjc3ZTlhZDBkZDNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2Zvb3Rlcic7XHJcblxyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRIZWFkZXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFN0YXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICdAZ2xvYmFsJzoge1xyXG4gICAgdWw6IHtcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhcHBCYXI6IHtcclxuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxyXG4gIH0sXHJcbiAgdG9vbGJhcjoge1xyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICB9LFxyXG4gIHRvb2xiYXJUaXRsZToge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSwgMS41KSxcclxuICB9LFxyXG4gIGhlcm9Db250ZW50OiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgsIDAsIDYpLFxyXG4gIH0sXHJcbiAgY2FyZEhlYWRlcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOlxyXG4gICAgICB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmdyZXlbMjAwXSA6IHRoZW1lLnBhbGV0dGUuZ3JleVs3MDBdLFxyXG4gIH0sXHJcbiAgY2FyZFByaWNpbmc6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdiYXNlbGluZScsXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgdGllcnMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdGcmVlJyxcclxuICAgIHByaWNlOiAnMCcsXHJcbiAgICBkZXNjcmlwdGlvbjogWycxMCB1c2VycyBpbmNsdWRlZCcsICcyIEdCIG9mIHN0b3JhZ2UnLCAnSGVscCBjZW50ZXIgYWNjZXNzJywgJ0VtYWlsIHN1cHBvcnQnXSxcclxuICAgIGJ1dHRvblRleHQ6ICdTaWduIHVwIGZvciBmcmVlJyxcclxuICAgIGJ1dHRvblZhcmlhbnQ6ICdvdXRsaW5lZCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1BybycsXHJcbiAgICBzdWJoZWFkZXI6ICdNb3N0IHBvcHVsYXInLFxyXG4gICAgcHJpY2U6ICcxNScsXHJcbiAgICBkZXNjcmlwdGlvbjogW1xyXG4gICAgICAnMjAgdXNlcnMgaW5jbHVkZWQnLFxyXG4gICAgICAnMTAgR0Igb2Ygc3RvcmFnZScsXHJcbiAgICAgICdIZWxwIGNlbnRlciBhY2Nlc3MnLFxyXG4gICAgICAnUHJpb3JpdHkgZW1haWwgc3VwcG9ydCcsXHJcbiAgICBdLFxyXG4gICAgYnV0dG9uVGV4dDogJ0dldCBzdGFydGVkJyxcclxuICAgIGJ1dHRvblZhcmlhbnQ6ICdjb250YWluZWQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdFbnRlcnByaXNlJyxcclxuICAgIHByaWNlOiAnMzAnLFxyXG4gICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgJzUwIHVzZXJzIGluY2x1ZGVkJyxcclxuICAgICAgJzMwIEdCIG9mIHN0b3JhZ2UnLFxyXG4gICAgICAnSGVscCBjZW50ZXIgYWNjZXNzJyxcclxuICAgICAgJ1Bob25lICYgZW1haWwgc3VwcG9ydCcsXHJcbiAgICBdLFxyXG4gICAgYnV0dG9uVGV4dDogJ0NvbnRhY3QgdXMnLFxyXG4gICAgYnV0dG9uVmFyaWFudDogJ291dGxpbmVkJyxcclxuICB9LFxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPVwiZGVmYXVsdFwiIGVsZXZhdGlvbj17MH0gY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn0+XHJcbiAgICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgbm9XcmFwIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyVGl0bGV9PlxyXG4gICAgICAgICAgICBDb21wYW55IG5hbWVcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgPGE+XHJcblx0ICAgICAgICAgICAgICA8TGluayB2YXJpYW50PVwiYnV0dG9uXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cclxuXHQgICAgICAgICAgICAgICAgSG9tZVxyXG5cdCAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvZmVhdHVyZXNcIj5cclxuICAgICAgICAgICAgICAgPGE+XHJcblx0ICAgICAgICAgICAgICA8TGluayB2YXJpYW50PVwiYnV0dG9uXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cclxuXHQgICAgICAgICAgICAgICAgRmVhdHVyZXNcclxuXHQgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2VudGVycHJpc2VcIj5cclxuXHQgICAgICAgICAgICA8YT5cclxuXHRcdCAgICAgICAgICAgIDxMaW5rIHZhcmlhbnQ9XCJidXR0b25cIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG5cdFx0ICAgICAgICAgICAgICBFbnRlcnByaXNlXHJcblx0XHQgICAgICAgICAgICA8L0xpbms+XHJcblx0ICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L05leHRMaW5rPlxyXG5cclxuICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvc3VwcG9ydFwiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG5cdCAgICAgICAgICAgIDxMaW5rIHZhcmlhbnQ9XCJidXR0b25cIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cclxuXHQgICAgICAgICAgICAgIFN1cHBvcnRcclxuXHQgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8QnV0dG9uIGhyZWY9XCIjXCIgY29sb3I9XCJwcmltYXJ5XCIgdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAgXHJcbiAgICAgIHsvKiBIZXJvIHVuaXQgKi99XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiIGNvbXBvbmVudD1cIm1haW5cIiBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0NvbnRlbnR9PlxyXG5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoMlwiIGFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgIEJVVFRPTlNcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdCAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPkRlZmF1bHQ8L0J1dHRvbj5cclxuXHQgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuXHQgICAgICAgIFByaW1hcnlcclxuXHQgICAgICA8L0J1dHRvbj5cclxuXHQgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG5cdCAgICAgICAgU2Vjb25kYXJ5XHJcblx0ICAgICAgPC9CdXR0b24+XHJcblx0ICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgZGlzYWJsZWQ+XHJcblx0ICAgICAgICBEaXNhYmxlZFxyXG5cdCAgICAgIDwvQnV0dG9uPlxyXG5cdCAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGhyZWY9XCIjY29udGFpbmVkLWJ1dHRvbnNcIj5cclxuXHQgICAgICAgIExpbmtcclxuXHQgICAgICA8L0J1dHRvbj5cclxuXHQgICAgPC9kaXY+XHJcblxyXG5cdCAgICA8YnIvPlxyXG5cclxuXHJcbiAgICAgIFx0PFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDJcIiBhbGlnbj1cImNlbnRlclwiIGNvbG9yPVwidGV4dFByaW1hcnlcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICBHUklEIFhTXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHQgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcblx0ICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblx0ICAgICAgICAgIDxzcGFuPlRlc3RhbmRvIEdSSUQ8L3NwYW4+XHJcblx0ICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuXHQgICAgICAgICAgPHNwYW4+VGVzdGFuZG8gR1JJRDwvc3Bhbj5cclxuXHQgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG5cdCAgICAgICAgICA8c3Bhbj5UZXN0YW5kbyBHUklEPC9zcGFuPlxyXG5cdCAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcblx0ICAgICAgICAgIDxzcGFuPlRlc3RhbmRvIEdSSUQ8L3NwYW4+XHJcblx0ICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuXHQgICAgICAgICAgPHNwYW4+VGVzdGFuZG8gR1JJRDwvc3Bhbj5cclxuXHQgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG5cdCAgICAgICAgICA8c3Bhbj5UZXN0YW5kbyBHUklEPC9zcGFuPlxyXG5cdCAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcblx0ICAgICAgICAgIDxzcGFuPlRlc3RhbmRvIEdSSUQ8L3NwYW4+XHJcblx0ICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgPC9HcmlkPlxyXG5cdCAgICA8L2Rpdj5cclxuXHJcblx0ICAgICA8YnIvPlxyXG5cclxuXHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDJcIiBhbGlnbj1cImNlbnRlclwiIGNvbG9yPVwidGV4dFByaW1hcnlcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICBQcmljaW5nXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgUXVpY2tseSBidWlsZCBhbiBlZmZlY3RpdmUgcHJpY2luZyB0YWJsZSBmb3IgeW91ciBwb3RlbnRpYWwgY3VzdG9tZXJzIHdpdGggdGhpcyBsYXlvdXQuXHJcbiAgICAgICAgICBJdCZhcG9zO3MgYnVpbHQgd2l0aCBkZWZhdWx0IE1hdGVyaWFsLVVJIGNvbXBvbmVudHMgd2l0aCBsaXR0bGUgY3VzdG9taXphdGlvbi5cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgey8qIEVuZCBoZXJvIHVuaXQgKi99XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiIGNvbXBvbmVudD1cIm1haW5cIj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0gYWxpZ25JdGVtcz1cImZsZXgtZW5kXCI+XHJcbiAgICAgICAgICB7dGllcnMubWFwKCh0aWVyKSA9PiAoXHJcbiAgICAgICAgICAgIC8vIEVudGVycHJpc2UgY2FyZCBpcyBmdWxsIHdpZHRoIGF0IHNtIGJyZWFrcG9pbnRcclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBrZXk9e3RpZXIudGl0bGV9IHhzPXsxMn0gc209e3RpZXIudGl0bGUgPT09ICdFbnRlcnByaXNlJyA/IDEyIDogNn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpZXIudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIHN1YmhlYWRlcj17dGllci5zdWJoZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlVHlwb2dyYXBoeVByb3BzPXt7IGFsaWduOiAnY2VudGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICBzdWJoZWFkZXJUeXBvZ3JhcGh5UHJvcHM9e3sgYWxpZ246ICdjZW50ZXInIH19XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj17dGllci50aXRsZSA9PT0gJ1BybycgPyA8U3Rhckljb24gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZEhlYWRlcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRQcmljaW5nfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMlwiIHZhcmlhbnQ9XCJoM1wiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICR7dGllci5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAvbW9cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge3RpZXIuZGVzY3JpcHRpb24ubWFwKChsaW5lKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJsaVwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBhbGlnbj1cImNlbnRlclwiIGtleT17bGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBmdWxsV2lkdGggdmFyaWFudD17dGllci5idXR0b25WYXJpYW50fSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGllci5idXR0b25UZXh0fVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgXHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHsgIFxyXG4gIGZvb3Rlcjoge1xyXG4gICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5kaXZpZGVyfWAsXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg2KSxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg2KSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICB7J0NvcHlyaWdodCDCqSAnfVxyXG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XHJcbiAgICAgICAgWW91ciBXZWJzaXRlXHJcbiAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICB7Jy4nfVxyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgZm9vdGVycyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0NvbXBhbnknLFxyXG4gICAgZGVzY3JpcHRpb246IFsnVGVhbScsICdIaXN0b3J5JywgJ0NvbnRhY3QgdXMnLCAnTG9jYXRpb25zJ10sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0ZlYXR1cmVzJyxcclxuICAgIGRlc2NyaXB0aW9uOiBbJ0Nvb2wgc3R1ZmYnLCAnUmFuZG9tIGZlYXR1cmUnLCAnVGVhbSBmZWF0dXJlJywgJ0RldmVsb3BlciBzdHVmZicsICdBbm90aGVyIG9uZSddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdSZXNvdXJjZXMnLFxyXG4gICAgZGVzY3JpcHRpb246IFsnUmVzb3VyY2UnLCAnUmVzb3VyY2UgbmFtZScsICdBbm90aGVyIHJlc291cmNlJywgJ0ZpbmFsIHJlc291cmNlJ10sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0xlZ2FsJyxcclxuICAgIGRlc2NyaXB0aW9uOiBbJ1ByaXZhY3kgcG9saWN5JywgJ1Rlcm1zIG9mIHVzZSddLFxyXG4gIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBGb290ZXIoKXtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG5cdHJldHVybihcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0ICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIiBjb21wb25lbnQ9XCJmb290ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuXHRcdFx0ICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0ganVzdGlmeT1cInNwYWNlLWV2ZW5seVwiPlxyXG5cdFx0XHQgICAgICAgICAge2Zvb3RlcnMubWFwKChmb290ZXIpID0+IChcclxuXHRcdFx0ICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezN9IGtleT17Zm9vdGVyLnRpdGxlfT5cclxuXHRcdFx0ICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgZ3V0dGVyQm90dG9tPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAge2Zvb3Rlci50aXRsZX1cclxuXHRcdFx0ICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblx0XHRcdCAgICAgICAgICAgICAgPHVsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAge2Zvb3Rlci5kZXNjcmlwdGlvbi5tYXAoKGl0ZW0pID0+IChcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbX0+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICApKX1cclxuXHRcdFx0ICAgICAgICAgICAgICA8L3VsPlxyXG5cdFx0XHQgICAgICAgICAgICA8L0dyaWQ+XHJcblx0XHRcdCAgICAgICAgICApKX1cclxuXHRcdFx0ICAgICAgICA8L0dyaWQ+XHJcblx0XHRcdCAgICAgICAgPEJveCBtdD17NX0+XHJcblx0XHRcdCAgICAgICAgICA8Q29weXJpZ2h0IC8+XHJcblx0XHRcdCAgICAgICAgPC9Cb3g+XHJcblx0XHQgICAgICA8L0NvbnRhaW5lcj5cdFx0XHQgICAgICBcclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==
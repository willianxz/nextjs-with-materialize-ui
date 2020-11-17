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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 6
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      position: "static",
      color: "default",
      elevation: 0,
      className: classes.appBar,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: classes.toolbar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
          variant: "h6",
          color: "inherit",
          noWrap: true,
          className: classes.toolbarTitle,
          children: "Company name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16__["default"], {
                variant: "button",
                color: "textPrimary",
                className: classes.link,
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 16
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 16
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/features",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16__["default"], {
                variant: "button",
                color: "textPrimary",
                className: classes.link,
                children: "Features"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 16
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 16
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/enterprise",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16__["default"], {
                variant: "button",
                color: "textPrimary",
                className: classes.link,
                children: "Enterprise"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 14
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/support",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16__["default"], {
                variant: "button",
                color: "textPrimary",
                className: classes.link,
                children: "Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 14
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          href: "#",
          color: "primary",
          variant: "outlined",
          className: classes.link,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
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
        lineNumber: 147,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.root,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "contained",
          children: "Default"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 8
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "contained",
          color: "primary",
          children: "Primary"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 8
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "contained",
          color: "secondary",
          children: "Secondary"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 8
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "contained",
          disabled: true,
          children: "Disabled"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 8
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "contained",
          color: "primary",
          href: "#contained-buttons",
          children: "Link"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 8
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
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
        lineNumber: 170,
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
              lineNumber: 177,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
            item: true,
            xs: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
            item: true,
            xs: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
            item: true,
            xs: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
            item: true,
            xs: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
            item: true,
            xs: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
            item: true,
            xs: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Testando GRID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 10
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 8
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
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
        lineNumber: 203,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
        variant: "h5",
        align: "center",
        color: "textSecondary",
        component: "p",
        children: "Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
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
                    lineNumber: 224,
                    columnNumber: 50
                  }, _this) : null,
                  className: classes.cardHeader
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
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
                      lineNumber: 229,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
                      variant: "h6",
                      color: "textSecondary",
                      children: "/mo"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 232,
                      columnNumber: 21
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
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
                        lineNumber: 238,
                        columnNumber: 23
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 19
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    fullWidth: true,
                    variant: tier.buttonVariant,
                    color: "primary",
                    children: tier.buttonText
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 19
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 15
              }, _this)
            }, tier.title, false, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 13
            }, _this)
          );
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 257,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwidWwiLCJtYXJnaW4iLCJwYWRkaW5nIiwibGlzdFN0eWxlIiwiYXBwQmFyIiwiYm9yZGVyQm90dG9tIiwicGFsZXR0ZSIsImRpdmlkZXIiLCJ0b29sYmFyIiwiZmxleFdyYXAiLCJ0b29sYmFyVGl0bGUiLCJmbGV4R3JvdyIsImxpbmsiLCJzcGFjaW5nIiwiaGVyb0NvbnRlbnQiLCJjYXJkSGVhZGVyIiwiYmFja2dyb3VuZENvbG9yIiwidHlwZSIsImdyZXkiLCJjYXJkUHJpY2luZyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW5Cb3R0b20iLCJ0aWVycyIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvblRleHQiLCJidXR0b25WYXJpYW50Iiwic3ViaGVhZGVyIiwiSG9tZSIsImNsYXNzZXMiLCJyb290IiwibWFwIiwidGllciIsImFsaWduIiwibGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLFNBQVMsR0FBR0MsNEVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2QyxlQUFXO0FBQ1RDLFFBQUUsRUFBRTtBQUNGQyxjQUFNLEVBQUUsQ0FETjtBQUVGQyxlQUFPLEVBQUUsQ0FGUDtBQUdGQyxpQkFBUyxFQUFFO0FBSFQ7QUFESyxLQUQ0QjtBQVF2Q0MsVUFBTSxFQUFFO0FBQ05DLGtCQUFZLHNCQUFlTixLQUFLLENBQUNPLE9BQU4sQ0FBY0MsT0FBN0I7QUFETixLQVIrQjtBQVd2Q0MsV0FBTyxFQUFFO0FBQ1BD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QTtBQUFBLDJCQURGLGVBU0U7QUFBQSw4QkFDR1MsSUFBSSxDQUFDUixXQUFMLENBQWlCTyxHQUFqQixDQUFxQixVQUFDRyxJQUFEO0FBQUEsMENBQ3BCLHFFQUFDLHFFQUFEO0FBQVksaUNBQVMsRUFBQyxJQUF0QjtBQUEyQiwrQkFBTyxFQUFDLFdBQW5DO0FBQStDLDZCQUFLLEVBQUMsUUFBckQ7QUFBQSxrQ0FDR0E7QUFESCx5QkFBbUVBLElBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRG9CO0FBQUEscUJBQXJCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVEYsZUEwQkUscUVBQUMscUVBQUQ7QUFBQSx5Q0FDRSxxRUFBQyxnRUFBRDtBQUFRLDZCQUFTLE1BQWpCO0FBQWtCLDJCQUFPLEVBQUVGLElBQUksQ0FBQ04sYUFBaEM7QUFBK0MseUJBQUssRUFBQyxTQUFyRDtBQUFBLDhCQUNHTSxJQUFJLENBQUNQO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQWdCTyxJQUFJLENBQUNWLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUztBQUFBLFNBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpIRixlQTZKRSxxRUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0pGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUtEOztHQXRLdUJNLEk7VUFDTmxDLFM7OztLQURNa0MsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZGZkYTE1Zjk4OTBmNWE1OTljYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9mb290ZXInO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL3NyYy9uYXZiYXInO1xyXG5cclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBTdGFySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhckJvcmRlcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAnQGdsb2JhbCc6IHtcclxuICAgIHVsOiB7XHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYXBwQmFyOiB7XHJcbiAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YCxcclxuICB9LFxyXG4gIHRvb2xiYXI6IHtcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgfSxcclxuICB0b29sYmFyVGl0bGU6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEsIDEuNSksXHJcbiAgfSxcclxuICBoZXJvQ29udGVudDoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCAwLCA2KSxcclxuICB9LFxyXG4gIGNhcmRIZWFkZXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjpcclxuICAgICAgdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gdGhlbWUucGFsZXR0ZS5ncmV5WzIwMF0gOiB0aGVtZS5wYWxldHRlLmdyZXlbNzAwXSxcclxuICB9LFxyXG4gIGNhcmRQcmljaW5nOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHRpZXJzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnRnJlZScsXHJcbiAgICBwcmljZTogJzAnLFxyXG4gICAgZGVzY3JpcHRpb246IFsnMTAgdXNlcnMgaW5jbHVkZWQnLCAnMiBHQiBvZiBzdG9yYWdlJywgJ0hlbHAgY2VudGVyIGFjY2VzcycsICdFbWFpbCBzdXBwb3J0J10sXHJcbiAgICBidXR0b25UZXh0OiAnU2lnbiB1cCBmb3IgZnJlZScsXHJcbiAgICBidXR0b25WYXJpYW50OiAnb3V0bGluZWQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdQcm8nLFxyXG4gICAgc3ViaGVhZGVyOiAnTW9zdCBwb3B1bGFyJyxcclxuICAgIHByaWNlOiAnMTUnLFxyXG4gICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgJzIwIHVzZXJzIGluY2x1ZGVkJyxcclxuICAgICAgJzEwIEdCIG9mIHN0b3JhZ2UnLFxyXG4gICAgICAnSGVscCBjZW50ZXIgYWNjZXNzJyxcclxuICAgICAgJ1ByaW9yaXR5IGVtYWlsIHN1cHBvcnQnLFxyXG4gICAgXSxcclxuICAgIGJ1dHRvblRleHQ6ICdHZXQgc3RhcnRlZCcsXHJcbiAgICBidXR0b25WYXJpYW50OiAnY29udGFpbmVkJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnRW50ZXJwcmlzZScsXHJcbiAgICBwcmljZTogJzMwJyxcclxuICAgIGRlc2NyaXB0aW9uOiBbXHJcbiAgICAgICc1MCB1c2VycyBpbmNsdWRlZCcsXHJcbiAgICAgICczMCBHQiBvZiBzdG9yYWdlJyxcclxuICAgICAgJ0hlbHAgY2VudGVyIGFjY2VzcycsXHJcbiAgICAgICdQaG9uZSAmIGVtYWlsIHN1cHBvcnQnLFxyXG4gICAgXSxcclxuICAgIGJ1dHRvblRleHQ6ICdDb250YWN0IHVzJyxcclxuICAgIGJ1dHRvblZhcmlhbnQ6ICdvdXRsaW5lZCcsXHJcbiAgfSxcclxuXTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPVwiZGVmYXVsdFwiIGVsZXZhdGlvbj17MH0gY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn0+XHJcbiAgICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgbm9XcmFwIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyVGl0bGV9PlxyXG4gICAgICAgICAgICBDb21wYW55IG5hbWVcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgPGE+XHJcblx0ICAgICAgICAgICAgICA8TGluayB2YXJpYW50PVwiYnV0dG9uXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cclxuXHQgICAgICAgICAgICAgICAgSG9tZVxyXG5cdCAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvZmVhdHVyZXNcIj5cclxuICAgICAgICAgICAgICAgPGE+XHJcblx0ICAgICAgICAgICAgICA8TGluayB2YXJpYW50PVwiYnV0dG9uXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cclxuXHQgICAgICAgICAgICAgICAgRmVhdHVyZXNcclxuXHQgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2VudGVycHJpc2VcIj5cclxuXHQgICAgICAgICAgICA8YT5cclxuXHRcdCAgICAgICAgICAgIDxMaW5rIHZhcmlhbnQ9XCJidXR0b25cIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG5cdFx0ICAgICAgICAgICAgICBFbnRlcnByaXNlXHJcblx0XHQgICAgICAgICAgICA8L0xpbms+XHJcblx0ICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L05leHRMaW5rPlxyXG5cclxuICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvc3VwcG9ydFwiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG5cdCAgICAgICAgICAgIDxMaW5rIHZhcmlhbnQ9XCJidXR0b25cIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cclxuXHQgICAgICAgICAgICAgIFN1cHBvcnRcclxuXHQgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8QnV0dG9uIGhyZWY9XCIjXCIgY29sb3I9XCJwcmltYXJ5XCIgdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAgXHJcbiAgICAgIHsvKiBIZXJvIHVuaXQgKi99XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiIGNvbXBvbmVudD1cIm1haW5cIiBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0NvbnRlbnR9PlxyXG5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoMlwiIGFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgIEJVVFRPTlNcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdCAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPkRlZmF1bHQ8L0J1dHRvbj5cclxuXHQgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuXHQgICAgICAgIFByaW1hcnlcclxuXHQgICAgICA8L0J1dHRvbj5cclxuXHQgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG5cdCAgICAgICAgU2Vjb25kYXJ5XHJcblx0ICAgICAgPC9CdXR0b24+XHJcblx0ICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgZGlzYWJsZWQ+XHJcblx0ICAgICAgICBEaXNhYmxlZFxyXG5cdCAgICAgIDwvQnV0dG9uPlxyXG5cdCAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGhyZWY9XCIjY29udGFpbmVkLWJ1dHRvbnNcIj5cclxuXHQgICAgICAgIExpbmtcclxuXHQgICAgICA8L0J1dHRvbj5cclxuXHQgICAgPC9kaXY+XHJcblxyXG5cdCAgICA8YnIvPlxyXG5cclxuXHJcbiAgICAgIFx0PFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDJcIiBhbGlnbj1cImNlbnRlclwiIGNvbG9yPVwidGV4dFByaW1hcnlcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICBHUklEIFhTXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHQgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcblx0ICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblx0ICAgICAgICAgIDxzcGFuPlRlc3RhbmRvIEdSSUQ8L3NwYW4+XHJcblx0ICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuXHQgICAgICAgICAgPHNwYW4+VGVzdGFuZG8gR1JJRDwvc3Bhbj5cclxuXHQgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG5cdCAgICAgICAgICA8c3Bhbj5UZXN0YW5kbyBHUklEPC9zcGFuPlxyXG5cdCAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcblx0ICAgICAgICAgIDxzcGFuPlRlc3RhbmRvIEdSSUQ8L3NwYW4+XHJcblx0ICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuXHQgICAgICAgICAgPHNwYW4+VGVzdGFuZG8gR1JJRDwvc3Bhbj5cclxuXHQgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG5cdCAgICAgICAgICA8c3Bhbj5UZXN0YW5kbyBHUklEPC9zcGFuPlxyXG5cdCAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcblx0ICAgICAgICAgIDxzcGFuPlRlc3RhbmRvIEdSSUQ8L3NwYW4+XHJcblx0ICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgPC9HcmlkPlxyXG5cdCAgICA8L2Rpdj5cclxuXHJcblx0ICAgICA8YnIvPlxyXG5cclxuXHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDJcIiBhbGlnbj1cImNlbnRlclwiIGNvbG9yPVwidGV4dFByaW1hcnlcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICBQcmljaW5nXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgUXVpY2tseSBidWlsZCBhbiBlZmZlY3RpdmUgcHJpY2luZyB0YWJsZSBmb3IgeW91ciBwb3RlbnRpYWwgY3VzdG9tZXJzIHdpdGggdGhpcyBsYXlvdXQuXHJcbiAgICAgICAgICBJdCZhcG9zO3MgYnVpbHQgd2l0aCBkZWZhdWx0IE1hdGVyaWFsLVVJIGNvbXBvbmVudHMgd2l0aCBsaXR0bGUgY3VzdG9taXphdGlvbi5cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgey8qIEVuZCBoZXJvIHVuaXQgKi99XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiIGNvbXBvbmVudD1cIm1haW5cIj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0gYWxpZ25JdGVtcz1cImZsZXgtZW5kXCI+XHJcbiAgICAgICAgICB7dGllcnMubWFwKCh0aWVyKSA9PiAoXHJcbiAgICAgICAgICAgIC8vIEVudGVycHJpc2UgY2FyZCBpcyBmdWxsIHdpZHRoIGF0IHNtIGJyZWFrcG9pbnRcclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBrZXk9e3RpZXIudGl0bGV9IHhzPXsxMn0gc209e3RpZXIudGl0bGUgPT09ICdFbnRlcnByaXNlJyA/IDEyIDogNn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpZXIudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIHN1YmhlYWRlcj17dGllci5zdWJoZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlVHlwb2dyYXBoeVByb3BzPXt7IGFsaWduOiAnY2VudGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICBzdWJoZWFkZXJUeXBvZ3JhcGh5UHJvcHM9e3sgYWxpZ246ICdjZW50ZXInIH19XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj17dGllci50aXRsZSA9PT0gJ1BybycgPyA8U3Rhckljb24gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZEhlYWRlcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRQcmljaW5nfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMlwiIHZhcmlhbnQ9XCJoM1wiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICR7dGllci5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAvbW9cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge3RpZXIuZGVzY3JpcHRpb24ubWFwKChsaW5lKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJsaVwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBhbGlnbj1cImNlbnRlclwiIGtleT17bGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBmdWxsV2lkdGggdmFyaWFudD17dGllci5idXR0b25WYXJpYW50fSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGllci5idXR0b25UZXh0fVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8Rm9vdGVyLz5cclxuXHJcblxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
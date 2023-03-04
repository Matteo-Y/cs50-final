"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;
var _react = _interopRequireDefault(require("react"));
require("./App.css");
require("./modules/Sections.css");
require("./modules/pictures/Pictures.css");
require("./modules/menus/Menus.css");
var _NavButton = _interopRequireDefault(require("./modules/NavButton.js"));
var _Pictures3 = _interopRequireDefault(require("./modules/pictures/Pictures.js"));
var _Menus3 = _interopRequireDefault(require("./modules/menus/Menus.js"));
var _div, _Pictures, _Menus, _h, _p, _p2, _p3, _a, _a2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var REACT_ELEMENT_TYPE;
function _jsx(type, props, key, children) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var defaultProps = type && type.defaultProps, childrenLength = arguments.length - 3; if (props || 0 === childrenLength || (props = { children: void 0 }), 1 === childrenLength) props.children = children;else if (childrenLength > 1) { for (var childArray = new Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 3]; props.children = childArray; } if (props && defaultProps) for (var propName in defaultProps) void 0 === props[propName] && (props[propName] = defaultProps[propName]);else props || (props = defaultProps || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: void 0 === key ? null : "" + key, ref: null, props: props, _owner: null }; }
function App() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_jsx("div", {
    className: "hero"
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "logo mx-auto my-60"
  }, void 0, /*#__PURE__*/_jsx("img", {
    width: "300px",
    height: "300px",
    src: require('./res/ui/logo.jpg'),
    alt: "logo"
  })), _div || (_div = /*#__PURE__*/_jsx("div", {
    className: "nav"
  }, void 0, /*#__PURE__*/_jsx(_NavButton.default, {
    elementId: "menus",
    name: "MENUS"
  }), /*#__PURE__*/_jsx(_NavButton.default, {
    elementId: "pictures",
    name: "GALLERY"
  }), /*#__PURE__*/_jsx(_NavButton.default, {
    elementId: "contacts",
    name: "CONTACTS"
  })))), _Pictures || (_Pictures = /*#__PURE__*/_jsx(_Pictures3.default, {})), _Menus || (_Menus = /*#__PURE__*/_jsx(_Menus3.default, {})), /*#__PURE__*/_jsx("div", {
    id: "contacts"
  }, void 0, _h || (_h = /*#__PURE__*/_jsx("h1", {
    className: "title"
  }, void 0, "CONTACTS AND LINKS")), /*#__PURE__*/_jsx("div", {
    className: "content"
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "pfp-container"
  }, void 0, /*#__PURE__*/_jsx("img", {
    className: "pfp",
    src: require("./res/pics/julia_pfp.jpg"),
    alt: "PROFILE PIC"
  })), /*#__PURE__*/_jsx("div", {
    className: "contact-form"
  }, void 0, _p || (_p = /*#__PURE__*/_jsx("p", {
    className: "description subtitle"
  }, void 0, "Julia Roopenian")), /*#__PURE__*/_jsx("div", {
    className: "contact-section"
  }, void 0, /*#__PURE__*/_jsx("img", {
    className: "h-12 mx-1",
    src: require("./res/ui/phone.png"),
    alt: ""
  }), _p2 || (_p2 = /*#__PURE__*/_jsx("p", {
    className: "contact-details"
  }, void 0, "(603) 554-0362")), /*#__PURE__*/_jsx("img", {
    className: "h-12 mx-1",
    src: require("./res/ui/mail.png"),
    alt: ""
  }), _p3 || (_p3 = /*#__PURE__*/_jsx("p", {
    className: "contact-details"
  }, void 0, "order@dalessiosbakery.com")), /*#__PURE__*/_jsx("img", {
    className: "h-12 mx-1",
    src: require("./res/ui/fb_icon.png"),
    alt: ""
  }), _a || (_a = /*#__PURE__*/_jsx("a", {
    className: "contact-details",
    href: "https://www.facebook.com/profile.php?id=100085895066844&mibextid=LQQJ4d",
    target: "_blank",
    rel: "noreferrer noopener"
  }, void 0, "Facebook")), /*#__PURE__*/_jsx("img", {
    className: "h-10 mx-2",
    src: require("./res/ui/yelp.png"),
    alt: ""
  }), _a2 || (_a2 = /*#__PURE__*/_jsx("a", {
    className: "contact-details",
    href: "https://www.yelp.com/biz/dalessios-bakery-canyon-lake?utm_source=ishare",
    target: "_blank",
    rel: "noreferrer noopener"
  }, void 0, "Yelp")))))));
}
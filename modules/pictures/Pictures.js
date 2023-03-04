"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pictures;
var _react = _interopRequireDefault(require("react"));
var _PictureCard = _interopRequireDefault(require("./PictureCard"));
var _RedirectCard = _interopRequireDefault(require("./RedirectCard"));
var _h;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var REACT_ELEMENT_TYPE;
function _jsx(type, props, key, children) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var defaultProps = type && type.defaultProps, childrenLength = arguments.length - 3; if (props || 0 === childrenLength || (props = { children: void 0 }), 1 === childrenLength) props.children = children;else if (childrenLength > 1) { for (var childArray = new Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 3]; props.children = childArray; } if (props && defaultProps) for (var propName in defaultProps) void 0 === props[propName] && (props[propName] = defaultProps[propName]);else props || (props = defaultProps || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: void 0 === key ? null : "" + key, ref: null, props: props, _owner: null }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Pictures() {
  var _React$useState = _react.default.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    expanded = _React$useState2[0],
    setExpanded = _React$useState2[1];
  var pictures = ['muffins.jpg', 'donuts_oldFashion.jpg', 'woopy_pie.jpg', 'platter.jpg', 'bagged_cookies.jpg', 'cheese_platter.jpg', 'cupcake.jpg', 'display.jpg', 'ginger_bread.jpg', 'mozza.jpg', 'donut.jpg'];
  function handleExpansion() {
    setExpanded(!expanded);
    if (expanded) document.getElementById("pictures").scrollIntoView({
      behavior: 'smooth'
    });
  }
  function getPictures() {
    var result = [];
    for (var i = 0; i < pictures.length; i++) {
      result.push( /*#__PURE__*/_jsx(_PictureCard.default, {
        img: require('./../../res/pics/' + pictures[i])
      }));
    }
    return result;
  }
  return /*#__PURE__*/_jsx("div", {
    id: "pictures",
    className: expanded ? "expanded" : ""
  }, void 0, _h || (_h = /*#__PURE__*/_jsx("h1", {
    className: "title"
  }, void 0, "GALLERY")), /*#__PURE__*/_jsx("div", {
    className: "content gallery"
  }, void 0, getPictures(), /*#__PURE__*/_jsx(_RedirectCard.default, {
    img: require('./../../res/pics/storefront.jpg'),
    linkOne: "https://yelp.to/QLXNFTmYJxb",
    msgOne: "Leave thoughts at",
    iconOne: require("./../../res/ui/yelp.png"),
    linkTwo: "https://www.facebook.com/profile.php?id=100085895066844&mibextid=LQQJ4d",
    msgTwo: "See more on",
    iconTwo: require("./../../res/ui/fb_icon.png")
  })), /*#__PURE__*/_jsx("button", {
    className: "expand-toggle",
    onClick: handleExpansion
  }, void 0, "="));
}
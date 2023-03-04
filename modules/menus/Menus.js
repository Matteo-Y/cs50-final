"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Menus;
var _MenuSlide = _interopRequireDefault(require("./MenuSlide"));
var _h, _div;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var REACT_ELEMENT_TYPE;
function _jsx(type, props, key, children) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var defaultProps = type && type.defaultProps, childrenLength = arguments.length - 3; if (props || 0 === childrenLength || (props = { children: void 0 }), 1 === childrenLength) props.children = children;else if (childrenLength > 1) { for (var childArray = new Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 3]; props.children = childArray; } if (props && defaultProps) for (var propName in defaultProps) void 0 === props[propName] && (props[propName] = defaultProps[propName]);else props || (props = defaultProps || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: void 0 === key ? null : "" + key, ref: null, props: props, _owner: null }; }
function Menus() {
  var menus = ['patty_menu.jpg', 'vday_menu.jpg', 'christmas_menu.jpg', 'ny_menu.jpg', 'game_menu.jpg'];
  function getMenus() {
    var result = [];
    for (var i = 0; i < menus.length; i++) {
      result.push( /*#__PURE__*/_jsx(_MenuSlide.default, {
        img: require("./../../res/menus/" + menus[i])
      }));
    }
    return result;
  }
  return /*#__PURE__*/_jsx("div", {
    id: "menus"
  }, void 0, _h || (_h = /*#__PURE__*/_jsx("h1", {
    className: "title"
  }, void 0, "MENUS")), _div || (_div = /*#__PURE__*/_jsx("div", {
    className: "subtitle"
  }, void 0, /*#__PURE__*/_jsx("p", {
    className: "subtitle"
  }, void 0, "CHANGING WITH THE SEASONS"))), /*#__PURE__*/_jsx("div", {
    id: "menu-slide-container"
  }, void 0, getMenus()));
}
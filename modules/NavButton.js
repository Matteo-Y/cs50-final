"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavButton;
var REACT_ELEMENT_TYPE;
function _jsx(type, props, key, children) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var defaultProps = type && type.defaultProps, childrenLength = arguments.length - 3; if (props || 0 === childrenLength || (props = { children: void 0 }), 1 === childrenLength) props.children = children;else if (childrenLength > 1) { for (var childArray = new Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 3]; props.children = childArray; } if (props && defaultProps) for (var propName in defaultProps) void 0 === props[propName] && (props[propName] = defaultProps[propName]);else props || (props = defaultProps || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: void 0 === key ? null : "" + key, ref: null, props: props, _owner: null }; }
function NavButton(props) {
  function scrollToElement() {
    document.getElementById(props.elementId).scrollIntoView({
      behavior: 'smooth'
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx("button", {
    className: "nav-button",
    onClick: scrollToElement
  }, void 0, /*#__PURE__*/_jsx("p", {
    className: "button-text"
  }, void 0, props.name), /*#__PURE__*/_jsx("img", {
    width: "150px",
    src: require('./../res/ui/vine_line_1.png'),
    alt: "border"
  })));
}
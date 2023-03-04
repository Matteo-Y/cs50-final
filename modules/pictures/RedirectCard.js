"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RedirectCard;
var REACT_ELEMENT_TYPE;
function _jsx(type, props, key, children) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var defaultProps = type && type.defaultProps, childrenLength = arguments.length - 3; if (props || 0 === childrenLength || (props = { children: void 0 }), 1 === childrenLength) props.children = children;else if (childrenLength > 1) { for (var childArray = new Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 3]; props.children = childArray; } if (props && defaultProps) for (var propName in defaultProps) void 0 === props[propName] && (props[propName] = defaultProps[propName]);else props || (props = defaultProps || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: void 0 === key ? null : "" + key, ref: null, props: props, _owner: null }; }
function RedirectCard(props) {
  return /*#__PURE__*/_jsx("div", {
    className: "image-card redirect-menu"
  }, void 0, /*#__PURE__*/_jsx("a", {
    className: "link",
    href: props.linkOne,
    target: "_blank",
    rel: "noreferrer noopener"
  }, void 0, props.msgOne, /*#__PURE__*/_jsx("img", {
    className: "h-8 mx-2 my-2",
    src: props.iconOne,
    alt: ""
  })), /*#__PURE__*/_jsx("a", {
    className: "link",
    href: props.linkTwo,
    target: "_blank",
    rel: "noreferrer noopener"
  }, void 0, props.msgTwo, /*#__PURE__*/_jsx("img", {
    className: "h-10 mx-2 my-1",
    src: props.iconTwo,
    alt: "ai"
  })));
}
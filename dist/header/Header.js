"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Image = require("../images/Image");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nposition: absolute;\nleft: 11.42%;\nright: 11.42%;\ntop: 34%;\nbottom: 34%;\ndisplay: flex;\njustify-content: space-between;\npadding-left: 20px;\npadding-right: 20px;\n\nbackground: #FFFFFF;\nbox-shadow: inset 0px -1px 0px #DFE1E6;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nposition: absolute;\nwidth: 1296px;\nheight: 200px;\nleft: 0px;\ntop: 396px;\n\nbackground: #F4F5F7;\n\n-webkit-box-shadow: inset 0px -1px 0px #DFE1E6;\n        box-shadow: inset 0px -1px 0px #DFE1E6;\nleft: 11.42%;\nright: 11.42%;\ntop: 34%;\nbottom: 34%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 Headers with simple "auth" states and brand options.
 **/
var Nav = _styledComponents.default.div(_templateObject());

var HeaderContainer = _styledComponents.default.div(_templateObject2());

var ContainerSide = _styledComponents.default.div(_templateObject3());

var Header = function Header(_ref) {
  var _ref$brand = _ref.brand,
      brand = _ref$brand === void 0 ? 'legalshield' : _ref$brand,
      _ref$auth = _ref.auth,
      auth = _ref$auth === void 0 ? false : _ref$auth;
  var brandName;

  switch (brand) {
    case 'legalshield':
      brandName = 'LegalShield';
      break;

    case 'commercial':
      brandName = 'CommercialShield';
      break;

    case 'idshield':
      brandName = 'IDShield';
      break;

    default:
      brandName = 'LegalShield';
  }

  return /*#__PURE__*/_react.default.createElement(Nav, null, /*#__PURE__*/_react.default.createElement(HeaderContainer, null, /*#__PURE__*/_react.default.createElement(ContainerSide, null, /*#__PURE__*/_react.default.createElement(_Image.Image, {
    img: "menu.svg"
  }), /*#__PURE__*/_react.default.createElement(_Image.Image, {
    img: brand + '-logo.svg'
  }), /*#__PURE__*/_react.default.createElement("span", null, brandName)), auth === 'true' && /*#__PURE__*/_react.default.createElement(ContainerSide, null, /*#__PURE__*/_react.default.createElement(_Image.Image, {
    img: "bell.svg"
  }), /*#__PURE__*/_react.default.createElement(_Image.Image, {
    img: "help.svg"
  }), /*#__PURE__*/_react.default.createElement(_Image.Image, {
    img: "avatar-placeholder.svg"
  }))));
};

exports.Header = Header;
Header.propTypes = {
  brand: _propTypes.default.string,
  auth: _propTypes.default.bool
};
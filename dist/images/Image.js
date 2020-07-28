"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nmargin: 0 10px;\nheight: 30px;\nwidth: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Img = _styledComponents.default.img(_templateObject());

var assets = '../assets/img/';

var Image = function Image(_ref) {
  var _ref$img = _ref.img,
    img = _ref$img === void 0 ? 'legalshield-logo.svg' : _ref$img;
  return /*#__PURE__*/_react.default.createElement(Img, {
    src: assets + img,
    alt: img
  });
};

exports.Image = Image;
Image.propTypes = {
  img: _propTypes.default.string.isRequired
};
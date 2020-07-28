"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IdShieldSignedIn = exports.IdShieldDefault = exports.CommercialShieldSignedIn = exports.CommercialShieldDefault = exports.LegalShieldSignedIn = exports.LegalShieldDefault = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Header = require("./Header");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _Header.Header,
  title: 'Header',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};
exports.default = _default;

var LegalShieldDefault = function LegalShieldDefault() {
  return /*#__PURE__*/_react.default.createElement(_Header.Header, {
    brand: "legalshield"
  });
};

exports.LegalShieldDefault = LegalShieldDefault;

var LegalShieldSignedIn = function LegalShieldSignedIn() {
  return /*#__PURE__*/_react.default.createElement(_Header.Header, {
    brand: "legalshield",
    auth: "true"
  });
};

exports.LegalShieldSignedIn = LegalShieldSignedIn;

var CommercialShieldDefault = function CommercialShieldDefault() {
  return /*#__PURE__*/_react.default.createElement(_Header.Header, {
    brand: "commercial"
  });
};

exports.CommercialShieldDefault = CommercialShieldDefault;

var CommercialShieldSignedIn = function CommercialShieldSignedIn() {
  return /*#__PURE__*/_react.default.createElement(_Header.Header, {
    brand: "commercial",
    auth: "true"
  });
};

exports.CommercialShieldSignedIn = CommercialShieldSignedIn;

var IdShieldDefault = function IdShieldDefault() {
  return /*#__PURE__*/_react.default.createElement(_Header.Header, {
    brand: "idshield"
  });
};

exports.IdShieldDefault = IdShieldDefault;

var IdShieldSignedIn = function IdShieldSignedIn() {
  return /*#__PURE__*/_react.default.createElement(_Header.Header, {
    brand: "idshield",
    auth: "true"
  });
};

exports.IdShieldSignedIn = IdShieldSignedIn;
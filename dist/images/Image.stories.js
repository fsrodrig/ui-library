"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = exports.LegalShieldLogo = exports.IdShieldLogo = exports.Help = exports.CommercialShieldLogo = exports.Bell = exports.AvatarPlaceholder = exports.Default = exports.logoData = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Image = require("./Image");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _Image.Image,
  title: 'Image',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};
exports.default = _default;
var logoData = {
  img: 'legalshield-logo.svg'
};
exports.logoData = logoData;

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_Image.Image, logoData);
};

exports.Default = Default;

var AvatarPlaceholder = function AvatarPlaceholder() {
  return /*#__PURE__*/_react.default.createElement(_Image.Image, {
    img: "avatar-placeholder.svg"
  });
};

exports.AvatarPlaceholder = AvatarPlaceholder;

var Bell = function Bell() {
  return /*#__PURE__*/_react.default.createElement(_Image.Image, {
    img: "bell.svg"
  });
};

exports.Bell = Bell;

var CommercialShieldLogo = function CommercialShieldLogo() {
  return /*#__PURE__*/_react.default.createElement(_Image.Image, {
    img: "commercial-logo.svg"
  });
};

exports.CommercialShieldLogo = CommercialShieldLogo;

var Help = function Help() {
  return /*#__PURE__*/_react.default.createElement(_Image.Image, {
    img: "help.svg"
  });
};

exports.Help = Help;

var IdShieldLogo = function IdShieldLogo() {
  return /*#__PURE__*/_react.default.createElement(_Image.Image, {
    img: "idshield-logo.svg"
  });
};

exports.IdShieldLogo = IdShieldLogo;

var LegalShieldLogo = function LegalShieldLogo() {
  return /*#__PURE__*/_react.default.createElement(_Image.Image, {
    img: "legalshield-logo.svg"
  });
};

exports.LegalShieldLogo = LegalShieldLogo;

var Menu = function Menu() {
  return /*#__PURE__*/_react.default.createElement(_Image.Image, {
    img: "menu.svg"
  });
};

exports.Menu = Menu;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSON_PACKETS = exports.ISO_Structures = exports.LanguageModules = exports.DefaultRequestMethods = void 0;
var DefaultRequestMethods;
(function (DefaultRequestMethods) {
    DefaultRequestMethods["GET"] = "GET";
    DefaultRequestMethods["POST"] = "POST";
    DefaultRequestMethods["PUT"] = "PUT";
    DefaultRequestMethods["DELETE"] = "DELETE";
    DefaultRequestMethods["OPT"] = "OPTIONS";
    DefaultRequestMethods["PATCH"] = "PATCH";
})(DefaultRequestMethods || (exports.DefaultRequestMethods = DefaultRequestMethods = {}));
exports.LanguageModules = {
    ISO_639_EIN: 'en',
    ISO_723_HIN: 'hi',
    ISO_812_FRN: 'fr'
};
exports.ISO_Structures = {
    ISO_639_EIN: 'ISO_639_EIN',
    ISO_723_HIN: 'ISO_723_HIN',
    ISO_812_FRN: 'ISO_812_FRN'
};
var JSON_PACKETS;
(function (JSON_PACKETS) {
    JSON_PACKETS["ISO_639_EIN"] = "ISO_639_EIN.json";
    JSON_PACKETS["ISO_723_HIN"] = "ISO_723_HIN.json";
    JSON_PACKETS["ISO_812_FRN"] = "ISO_812_FRN.json";
})(JSON_PACKETS || (exports.JSON_PACKETS = JSON_PACKETS = {}));

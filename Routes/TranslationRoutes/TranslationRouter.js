"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Translations_1 = require("../../Controller/TranslationController/Translations");
const router = (0, express_1.Router)();
router.get('/ISO/:languageSelector', Translations_1.translationConfigSettings);
exports.default = router;

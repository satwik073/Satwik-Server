"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structure_1 = require("./structure");
const expressServerFramework = require('express');
const httpServerApplication = expressServerFramework();
const httpRequestBodyParsingLibrary = require('body-parser');
const httpCrossOriginResourceSharingMiddleware = require('cors');
const TranslationRouter_1 = __importDefault(require("./Routes/TranslationRoutes/TranslationRouter"));
httpServerApplication.use(httpRequestBodyParsingLibrary.json());
httpServerApplication.use(httpRequestBodyParsingLibrary.urlencoded({ extended: true }));
httpServerApplication.use(httpCrossOriginResourceSharingMiddleware({
    origin: '*',
    methods: [structure_1.DefaultRequestMethods === null || structure_1.DefaultRequestMethods === void 0 ? void 0 : structure_1.DefaultRequestMethods.GET, structure_1.DefaultRequestMethods === null || structure_1.DefaultRequestMethods === void 0 ? void 0 : structure_1.DefaultRequestMethods.POST, structure_1.DefaultRequestMethods === null || structure_1.DefaultRequestMethods === void 0 ? void 0 : structure_1.DefaultRequestMethods.PUT, structure_1.DefaultRequestMethods === null || structure_1.DefaultRequestMethods === void 0 ? void 0 : structure_1.DefaultRequestMethods.DELETE],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
httpServerApplication.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.send('Hello World');
}));
httpServerApplication.use('/translation/models/config-data', TranslationRouter_1.default);
httpServerApplication.listen('8000', () => {
    console.log('Server is running on port 8000');
});

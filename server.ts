import { Request , Response  } from "express";
import { DefaultRequestMethods } from "./structure";
const expressServerFramework = require('express');

const httpServerApplication = expressServerFramework();
const httpRequestBodyParsingLibrary = require('body-parser');
const httpCrossOriginResourceSharingMiddleware = require('cors');
import translationConfig from './Routes/TranslationRoutes/TranslationRouter'

httpServerApplication.use(httpRequestBodyParsingLibrary.json())
httpServerApplication.use(httpRequestBodyParsingLibrary.urlencoded({extended : true}))
httpServerApplication.use(httpCrossOriginResourceSharingMiddleware(
    {
        origin: '*',  
        methods: [DefaultRequestMethods?.GET, DefaultRequestMethods?.POST, DefaultRequestMethods?.PUT, DefaultRequestMethods?.DELETE],
        allowedHeaders: ['Content-Type', 'Authorization']
      }
))

httpServerApplication.get('/', async(request : Request , response : Response)=>{
    response.send('Hello World')
})

httpServerApplication.use('/translation/models/config-data',translationConfig)

httpServerApplication.listen('8000', ()=>{
    console.log('Server is running on port 8000')
})
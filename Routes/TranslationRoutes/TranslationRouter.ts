import { Express , Router } from "express";
import { translationConfigSettings } from "../../Controller/TranslationController/Translations";


const router = Router()

router.get('/ISO/:languageSelector', translationConfigSettings)

export default router
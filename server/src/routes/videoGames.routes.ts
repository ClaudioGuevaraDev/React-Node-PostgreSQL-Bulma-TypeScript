import { Router } from "express";

import * as videoGamesCtrl from '../controllers/videoGame.controller'
import * as middlewares from '../middlewares'

const router = Router()

router.post('/', videoGamesCtrl.createvideoGameWithoutImage)
router.put('/upload-image/:id', [
    middlewares.fileUpload
], videoGamesCtrl.updateImageOfVideoGame)
router.get('/', videoGamesCtrl.getAllVideoGames)

export default router
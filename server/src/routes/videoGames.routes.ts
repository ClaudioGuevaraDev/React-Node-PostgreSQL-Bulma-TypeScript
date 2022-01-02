import { Router } from "express";

import * as videoGamesCtrl from '../controllers/videoGame.controller'
import * as middlewares from '../middlewares'

const router = Router()

router.post('/', videoGamesCtrl.createvideoGameWithoutImage)
router.put('/upload-image/:id', [
    middlewares.fileUpload
], videoGamesCtrl.updateImageOfVideoGame)
router.post('/list', videoGamesCtrl.getAllVideoGames)
router.get('/:id', videoGamesCtrl.getOneVideoGame)
router.delete('/:id', videoGamesCtrl.deleteOneVideoGame)
router.put('/:id', videoGamesCtrl.updateVideoGame)
router.put('/updated-image/:id', [
    middlewares.fileUpload
], videoGamesCtrl.updatedImageVideoGame)

export default router
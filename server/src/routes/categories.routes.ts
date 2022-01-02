import { Router } from 'express'

import * as categoriesCtrl from '../controllers/categories.controller'

const router = Router()

router.get('/', categoriesCtrl.getAllCategories)

export default router

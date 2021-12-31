import { Router } from 'express'

import * as authCtrl from '../controllers/auth.controller'

const router = Router()

router.post('/sign-up', authCtrl.signUp)
router.post('/sign-in', authCtrl.signIn)

export default router
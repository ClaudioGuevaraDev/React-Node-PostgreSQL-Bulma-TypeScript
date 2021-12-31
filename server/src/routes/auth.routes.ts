import { Router } from 'express'

import * as authCtrl from '../controllers/auth.controller'
import * as middlewares from '../middlewares'

const router = Router()

router.post('/sign-up', [
    middlewares.validateUsername,
    middlewares.validateEmail
], authCtrl.signUp)
router.post('/sign-in', authCtrl.signIn)

export default router
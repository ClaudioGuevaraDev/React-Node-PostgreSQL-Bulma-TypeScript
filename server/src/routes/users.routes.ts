import { Router } from 'express'

import * as usersCtrl from '../controllers/users.controller'

const router = Router()

router.get('/', usersCtrl.getAllUsers)

export default router
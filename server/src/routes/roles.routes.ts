import { Router } from 'express'

import * as rolesCtrl from '../controllers/roles.controller'

const router = Router()

router.post('/', rolesCtrl.createRoles)
router.get('/', rolesCtrl.getAllRoles)
router.delete('/:id', rolesCtrl.deleteRole)
router.put('/:id', rolesCtrl.updateRole)

export default router
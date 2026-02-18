// backend/src/routes/users.routes.ts
import { Router } from 'express';
import usersController from '../controllers/users.controller';

const router = Router();

router.get('/', usersController.getAllUsers.bind(usersController));
router.get('/:id', usersController.getUserById.bind(usersController));
router.get('/username/:username', usersController.getUserByUsername.bind(usersController));
router.post('/register', usersController.createUser.bind(usersController));
router.post('/login', usersController.login.bind(usersController)); // <-- login agregado
router.patch('/:id', usersController.updateUser.bind(usersController));
router.delete('/:id', usersController.deleteUser.bind(usersController));

export default router;

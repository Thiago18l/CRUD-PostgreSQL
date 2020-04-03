import { Router } from 'express';

const routes = Router();

import { getUser, getUserByID, createUser, updateUser,deleteUser} from '../controllers/index.controller';


routes.get('/users', getUser)
routes.get('/users/:id', getUserByID);
routes.post('/users', createUser);
routes.put('/users/:id', updateUser);
routes.delete('/users/:id', deleteUser);

export default routes;
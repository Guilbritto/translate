import './bootstrap';
import { Router } from 'express';
import authMiddleware from './app/middleware/auth';
import TranslateController from './app/controller/TranslateController';
import LanguagesController from './app/controller/LanguagesController';
import LoadController from './app/controller/LoadController';
import WordController from './app/controller/WordController';
import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';
import ProjectController from './app/controller/ProjectController';
import InviteController from './app/controller/InviteController';
import multerConfig from './config/multer';
import multer from 'multer';
const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/projects', ProjectController.store);
routes.get('/projects/users/:id', ProjectController.show);
routes.get('/projects', ProjectController.index);
routes.post('/projects/invite', InviteController.store);

routes.put('/translate', TranslateController.update);

routes.get('/languages', LanguagesController.show);

routes.get('/translate/:keyWord', TranslateController.show);
routes.post(
  '/translate/load/:lang',
  upload.single('file'),
  LoadController.store
);

routes.get('/word/:word', WordController.show);
routes.get('/word', WordController.index);

export default routes;

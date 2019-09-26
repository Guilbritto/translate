import './bootstrap';
import { Router } from 'express';
import TranslateController from './app/controller/TranslateController';
import LanguagesController from './app/controller/LanguagesController';
import LoadController from './app/controller/LoadController';
import WordController from './app/controller/WordController';
import UserController from './app/controller/UserController';
import multerConfig from './config/multer';
import multer from 'multer';
const routes = new Router();
const upload = multer(multerConfig);

routes.get('/translate/:keyWord', TranslateController.show);

routes.put('/translate', TranslateController.update);

routes.get('/languages', LanguagesController.show);

routes.post(
  '/translate/load/:lang',
  upload.single('file'),
  LoadController.store
);

routes.get('/word/:word', WordController.show);
routes.get('/word', WordController.index);

routes.post('/users', UserController.store);
export default routes;

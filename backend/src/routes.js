import { Router } from 'express';
import TranslateController from './app/controller/TranslateController';
import LoadController from './app/controller/LoadController';
import multerConfig from './config/multer';
import multer from 'multer';
const routes = new Router();
const upload = multer(multerConfig);

routes.get('/translate/:lang', TranslateController.index);
routes.put('/translate', TranslateController.update);

routes.post(
  '/translate/load/:lang',
  upload.single('file'),
  LoadController.store
);

export default routes;

import { Router } from 'express';

import boardgamesController from './boardgames.controller.js';

const boardgamesRouter = Router();

boardgamesRouter.get("/" , boardgamesController.getBoardgames)

export default boardgamesRouter;
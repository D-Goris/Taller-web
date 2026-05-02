import { Router } from 'express';

import boardgamesController from './boardgames.controller.js';

const boardgamesRouter = Router();

boardgamesRouter.get("/" , boardgamesController.getBoardgames)
boardgamesRouter.get("/:idBoardgame", boardgamesController.getBoardgame)
boardgamesRouter.post("/", boardgamesController.addBoardgames)
boardgamesRouter.put("/:idBoardgame", boardgamesController.putBoardgame)

export default boardgamesRouter;
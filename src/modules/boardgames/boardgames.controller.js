import boardgamesService from './boardgames.service.js';

const boardgamesController = {};

boardgamesController.getBoardgames= (req, res) => {
    const boardgames = boardgamesService.getBoardgames();
    res.status(200).send ({
        boardgames: boardgames
    })
}

export default boardgamesController;
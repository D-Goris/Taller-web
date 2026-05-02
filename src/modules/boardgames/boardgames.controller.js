import boardgamesService from './boardgames.service.js';

const boardgamesController = {};

boardgamesController.getBoardgames = (req, res) => {
    const boardgames = boardgamesService.getBoardgames();
    res.status(200).send ({
        boardgames: boardgames
    })
}

boardgamesController.getBoardgame = (req, res) => {
    const idBoardGame = req.params.idBoardgame;

    const boardgame = boardgamesService.getBoardgame(idBoardGame);

    if(boardgame!=null){
        res.status(200).send ({
            boardgame: boardgame
        })
    }else{
        res.status(404).send ({
            boardgame: boardgame
        })
    }
    
}

boardgamesController.addBoardgames = (req, res)=>{
    const name= req.body.name;
    const minPlayer= req.body.minPlayer;
    const maxPlayer= req.body.maxPlayer;
    const duration= req.body.duration;
    const date= req.body.date;
    const status= req.body.status;

    const boardgames = boardgamesService.addBoardgames(name, minPlayer, maxPlayer, duration, date, status);

    res.status(201).send({
        boardgames:boardgames
    })
} 

boardgamesController.putBoardgame = (req, res) => {
    const idBoardGame = req.params.idBoardgame;
    const name= req.body.name;
    const minPlayer= req.body.minPlayer;
    const maxPlayer= req.body.maxPlayer;
    const duration= req.body.duration;
    const date= req.body.date;
    const status= req.body.status;

    const boardgame = boardgamesService.putBoardgame(idBoardGame, name, minPlayer, maxPlayer, duration, date, status);


    if(boardgame!=null){
        res.status(200).send ({
            boardgame: boardgame
        })
    }else{
        res.status(404).send ({
            boardgame: boardgame
        })
    }
}


export default boardgamesController;
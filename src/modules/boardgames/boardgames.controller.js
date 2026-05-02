import boardgamesService from './boardgames.service.js';

const boardgamesController = {};

boardgamesController.getBoardgames = (req, res) => {
    const boardgames = boardgamesService.getBoardgames();
    res.status(200).send ({
        boardgames: boardgames
    })
}

boardgamesController.getBoardgame = (req, res) => {
    const idBoardgame = req.params.idBoardgame;

    const boardgame = boardgamesService.getBoardgame(idBoardgame);

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

boardgamesController.addBoardgame = (req, res)=>{
    const name= req.body.name;
    const minPlayer= req.body.minPlayer;
    const maxPlayer= req.body.maxPlayer;
    const duration= req.body.duration;
    const date= req.body.date;
    const status= req.body.status;

    const boardgame = boardgamesService.addBoardgame(name, minPlayer, maxPlayer, duration, date, status);

    res.status(201).send({
        boardgame:boardgame
    })
} 

boardgamesController.putBoardgame = (req, res) => {
    const idBoardgame = req.params.idBoardgame;
    const name= req.body.name;
    const minPlayer= req.body.minPlayer;
    const maxPlayer= req.body.maxPlayer;
    const duration= req.body.duration;
    const date= req.body.date;
    const status= req.body.status;

    const boardgame = boardgamesService.putBoardgame(idBoardgame, name, minPlayer, maxPlayer, duration, date, status);


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

boardgamesController.patchBoardgame = (req, res) => {
    const idBoardgame = req.params.idBoardgame;
    const newBoardgame = req.body;

    const boardgame=boardgamesService.patchBoardgame(idBoardgame, newBoardgame);

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

boardgamesController.deleteBoardgame = (req,res) => {
    const idBoardgame = req.params.idBoardgame;

    const boardgame = boardgamesService.deleteBoardgame(idBoardgame);

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
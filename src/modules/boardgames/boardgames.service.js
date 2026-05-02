const boardgamesService = {};

let boardgames = [];
let contadorID= 1;

boardgamesService.getBoardgames = () => {
    return boardgames;
}

boardgamesService.getBoardgame = (id) => {
    for (let boardgame of boardgames) {
        if (boardgame.id === parseInt(id)) return boardgame;
    }
    return null;
}

boardgamesService.addBoardgames = (name, minPlayer, maxPlayer, duration, date, status)=>{
    const newBoardgame = {
        id          :   contadorID,
        name        :   name,
        minPlayer   :   minPlayer,
        maxPlayer   :   maxPlayer,
        duration    :   duration,
        date        :   date,
        status      :   status
    }
    contadorID++;
    boardgames.push(newBoardgame);
    return newBoardgame;
}

boardgamesService.putBoardgame = (idBoardGame, name, minPlayer, maxPlayer, duration, date, status) => {
    const newBoardgame = {
        id          :   parseInt(idBoardGame),
        name        :   name,
        minPlayer   :   minPlayer,
        maxPlayer   :   maxPlayer,
        duration    :   duration,
        date        :   date,
        status      :   status
    }

    for ( let boardgame of boardgames){
        if ( boardgame.id === parseInt(idBoardGame) ) {
            let indice = boardgames.indexOf(boardgame);
            boardgames[indice]=newBoardgame
            return newBoardgame;
        } 
    }
    return null;
}

export default boardgamesService;
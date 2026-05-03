const boardgamesService = {};

let boardgames = [];
let contadorID= 1;

boardgamesService.getBoardgames = () => {
    return boardgames;
}

boardgamesService.getBoardgame = (idBoardGame) => {
    for (let boardgame of boardgames) {
        if (boardgame.id === parseInt(idBoardGame)) return boardgame;
    }
    return null;
}

boardgamesService.addBoardgame = (name, minPlayer, maxPlayer, duration, date, status)=>{
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

boardgamesService.patchBoardgame = (idBoardGame, newBoardgame) =>{
    for (let boardgame of boardgames) {
        if (boardgame.id === parseInt(idBoardGame)){
            let indice = boardgames.indexOf(boardgame);
            return boardgames[indice] = { ...boardgames[indice], ...newBoardgame };
        }
    }
    return null;
}

boardgamesService.deleteBoardgame = (idBoardGame) =>{
    for (let boardgame of boardgames) {
        if (boardgame.id === parseInt(idBoardGame)){
            let indice = boardgames.indexOf(boardgame);
            return boardgames.splice(indice,1);
        }
    }
    return null;
}

export default boardgamesService;
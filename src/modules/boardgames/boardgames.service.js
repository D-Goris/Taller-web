const boardgamesService = {};

let boardgames = [];
let contadorID= 1;

boardgamesService.getBoardgames = () => {
    return boardgames;
}

export default boardgamesService;
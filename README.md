Ruta base http://127.0.0.1:3000/api/boardgames

Método  |	Ruta            |	Descripción
GET 	|   /	            |    Obtiene la lista de todos los juegos.
GET 	|   /:idBoardgame	|    Obtiene un juego específico por su ID.
POST    |	/	            |    Crea un nuevo juego de mesa.
PUT 	|   /:idBoardgame	|    Reemplaza un juego completo por ID.
PATCH   |	/:idBoardgame	|    Actualiza campos específicos de un juego.
DELETE  |   /:idBoardgame	|    Elimina un juego de la lista.
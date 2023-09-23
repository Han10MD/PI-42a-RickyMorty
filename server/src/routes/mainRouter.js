const {getCharById} = require("../controllers/getCharById");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");



const mainRouter = require('express').Router();

mainRouter.get("/character/:id", getCharById);
mainRouter.post("/login", postUser);
mainRouter.post("/fav", postFav);
mainRouter.delete("/fav/:id", deleteFav);
mainRouter.get("/login", login);

module.exports = mainRouter;
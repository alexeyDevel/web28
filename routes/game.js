const gameRouter = require("express").Router();
const gameController = require("../controllers/gameController");

gameRouter.get("/game", gameController.getGame);

gameRouter.post("/game", (req, res) => {
  res.send("game post");
});

gameRouter.put("/game", (req, res) => {
  res.send("game put");
});

module.exports = gameRouter;

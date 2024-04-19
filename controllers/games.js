const { readData, writeData } = require("../utils/data");

const sendAllGames = async (req, res) => {
  const games = await readData("./data/games.json");
  if (!games) {
    res.status(400);
    res.send({
      status: "error",
      message: "Нет игр в базе данных. Добавьте игру.",
    });
    return;
  }
  req.games = games;
  res.send(req.games);
};

const sendUpdatedGames = async (req, res) => {
  // Вернём ответ о проделанной операции с данными о играх
  res.send({
    games: req.games,
    updated: req.game,
  });
};

const addGame = async (req, res) => {
  // В качестве ответа отправляем объект с двумя полями
  res.send({
    games: req.games, // Обновлённый список со всеми играми
    updated: req.updatedObject, // Новая добавленная игра
  });
};

module.exports = {
  sendAllGames,
  sendUpdatedGames,
  addGame,
};

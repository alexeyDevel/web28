const getGame = (req, res) => {
  res.send({
    id: 1,
    name: "Sunkenland",
    year: 2022,
  });
};

module.exports = {
  getGame,
};

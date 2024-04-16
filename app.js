const express = require("express");
const gameRouter = require("./routes/game");
const userRouter = require("./routes/user");
const app = express();
const port = 3000;

app.use(gameRouter, userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

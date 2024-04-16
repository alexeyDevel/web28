const userRouter = require("express").Router();

userRouter.get("/user", (req, res) => {
  res.send("user get");
});

userRouter.post("/user", (req, res) => {
  res.send("user post");
});

userRouter.put("/user", (req, res) => {
  res.send("user put");
});

module.exports = userRouter;

const allowedCors = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://yandex.ru/search/?text=Sunkenland&clid=2270455&banerid=6301000000%3A63a07f6045f51462dfed62e0&win=573&lr=11122",
];

function cors(req, res, next) {
  const { origin } = req.headers;

  if (allowedCors.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  next();
}

module.exports = cors;

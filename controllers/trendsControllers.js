const getTrends = (req, res) => {
  //   res.send("Hello World!");
  res.json({
    status: "success",
    code: 200,
    data: "Hello World!",
  });
};

module.exports = { getTrends };

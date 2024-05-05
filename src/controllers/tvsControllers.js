const { fetchTVSeries } = require("../api/connection");

const getTrendingTVs = async (req, res) => {
  try {
    const data = await fetchTVSeries();
    console.log(data);
    res.json({
      status: "success",
      code: 200,
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTrendingTVs };

const { fetchTVSeries } = require("../api/connection");

const getTrendingTVs = async (req, res) => {
  try {
    const response = await fetchTVSeries();
    res.json({
      status: "success",
      code: 200,
      response,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTrendingTVs };

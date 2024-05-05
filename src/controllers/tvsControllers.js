const {
  fetchTVSeries,
  fetchTVsDetails,
  fetchTVCast,
} = require("../api/connection");

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

const getTVDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetchTVsDetails(id);
    console.log(response);
    res.json({
      status: "success",
      code: 200,
      results: response,
    });
  } catch (error) {
    console.log(error);
  }
};

const getTVCast = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetchTVCast(id);
    console.log(response);
    res.json({
      status: "success",
      code: 200,
      results: response,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTrendingTVs, getTVDetails, getTVCast };

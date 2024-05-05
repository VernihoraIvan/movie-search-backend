const {
  fetchPersonDetails,
  fetchPersonDetailsById,
} = require("../api/connection");

const getPersonDetailst = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetchPersonDetails(id);
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

const getAdditinalPersonDetailst = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetchPersonDetailsById(id);
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

module.exports = { getPersonDetailst, getAdditinalPersonDetailst };

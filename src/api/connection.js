// import axios from "axios";
const axios = require("axios");
// import {
//   MovieData,
//   MovieListResponse,
//   TVData,
//   TVListResponse,
// } from "../utilities/interfaces";

// axios.defaults.headers = "Access-Control-Allow-Origin";
const API_KEY = "34a3f3c9cce4f4b9cc46f3708ad7a6e9";
const BASE_URL = "https://api.themoviedb.org/3";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: "en-US",
};

const fetchMovies = async () => {
  try {
    const { data } = await axios.get("/trending/movie/day");
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const fetchTVSeries = async () => {
  try {
    const { data } = await axios.get("/trending/tv/day");
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// const fetchData = async (query) => {
//   try {
//     const { data } = await axios.get(`/search/movie?${API_KEY}query=${query}`);
//     return data.results;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

const fetchMovieByQuery = async (query, page) => {
  try {
    const { data } = await axios.get(
      `/search/movie?query=${query}&page=${page}`
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const fetchMovieDetails = async (id) => {
  try {
    const { data } = await axios.get(`/movie/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const fetchTVsDetails = async (id) => {
  try {
    const { data } = await axios.get(`/tv/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const fetchMovieCast = async (id) => {
  try {
    const { data } = await axios.get(`movie/${id}/credits`);
    return data.cast;
  } catch (error) {
    console.log(error);
  }
};

const fetchTVCast = async (id) => {
  try {
    const { data } = await axios.get(`tv/${id}/credits`);
    return data.cast;
  } catch (error) {
    console.log(error);
  }
};

const fetchPersonDetails = async (id) => {
  try {
    const { data } = await axios.get(`/person/${id}/combined_credits`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchPersonDetailsById = async (id) => {
  try {
    const { data } = await axios.get(`/person/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchMovieReview = async (id) => {
  try {
    const { data } = await axios.get(`/movie/${id}/reviews`);
    console.log(data);
    return data.results[0];
  } catch (error) {
    console.log(error);
  }
};

const fetchFavorites = async (ids) => {
  try {
    const requests = ids.map((id) => axios.get(`/movie/${id}`));
    const responses = await Promise.all(requests);
    return responses.map((response) => response.data);
  } catch (error) {
    console.log(error);
    return [];
  }
};

module.exports = {
  fetchMovies,
  fetchTVSeries,
  fetchMovieByQuery,
  fetchMovieDetails,
  fetchTVsDetails,
  fetchMovieCast,
  fetchTVCast,
  fetchPersonDetails,
  fetchPersonDetailsById,
  fetchMovieReview,
  fetchFavorites,
};

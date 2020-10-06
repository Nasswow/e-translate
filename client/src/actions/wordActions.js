import axios from "axios";
import { GET_WORDS, ADD_WORD, DELETE_WORD, WORDS_LOADING } from "./types";

export const getWords = () => (dispatch) => {
  dispatch(setWordsLoading());
  axios.get("./api/words").then((res) =>
    dispatch({
      type: GET_WORDS,
      payload: res.data,
    })
  );
};
export const addWord = (word) => (dispatch) => {
  axios.post("/api/words", word).then((res) =>
    dispatch({
      type: ADD_WORD,
      payload: res.data,
    })
  );
};
export const deleteWord = (id) => (dispatch) => {
  axios.delete(`/api/words/${id}`).then((res) =>
    dispatch({
      type: DELETE_WORD,
      payload: id,
    })
  );
};

export const setWordsLoading = () => {
  return {
    type: WORDS_LOADING,
  };
};

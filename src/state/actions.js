import { store } from "../index";
import data from "./data.json";

export const fetchPots = () => {
  store.dispatch(fetchPotsSuccess(data));
  return { type: "FETCH_POTS" };
};

export const fetchPotsSuccess = response => {
  return {
    type: "FETCH_POTS_SUCCESS",
    response
  };
};

export const fetchPotsFailure = error => {
  return {
    type: "FETCH_POTS_FAILURE",
    error
  };
};

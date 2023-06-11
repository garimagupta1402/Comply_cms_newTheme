import Utils from "../../Utils";

const { GET_ALL_PAGES } = Utils.ActionName;
let initialState = [];
export const getAllPagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PAGES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

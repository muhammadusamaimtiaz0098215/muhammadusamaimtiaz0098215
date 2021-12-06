import SET_CURRENT_USER from "../types/action.types";

const initialState = {
  user: null,
};

const authReducure = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducure;

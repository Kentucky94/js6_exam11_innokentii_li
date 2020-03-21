import {FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORY_SUCCESS} from "../actions/categoriesActons";

const initialState = {
  categories: [],
  currentCategory: {},
};

const categoriesReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_CATEGORIES_SUCCESS:
      return {...state, categories: action.categories};
    case FETCH_CATEGORY_SUCCESS:
      return {...state, currentCategory: action.category};
    default:
      return state;
  }
};

export default categoriesReducer;
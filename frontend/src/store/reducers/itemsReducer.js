import {
  FETCH_ALL_ITEMS_SUCCESS,
  FETCH_ITEM_BY_ID_SUCCESS,
  FETCH_ITEMS_BY_CATEGORY_SUCCESS
} from "../actions/itemsActions";

const initialState = {
  items: [],
  currentItem: {},
};

const itemsReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_ALL_ITEMS_SUCCESS:
      return {...state, items: action.items};
    case FETCH_ITEMS_BY_CATEGORY_SUCCESS:
      return {...state, items: action.items};
    case FETCH_ITEM_BY_ID_SUCCESS:
      return {...state, currentItem: action.item};
    default:
      return state
  }
};

export default itemsReducer;
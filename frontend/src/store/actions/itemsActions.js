import axiosOrders from "../../axiosOrders";
import {push} from 'connected-react-router';

export const FETCH_ALL_ITEMS_SUCCESS = 'FETCH_ALL_ITEMS_SUCCESS';
export const FETCH_ITEMS_BY_CATEGORY_SUCCESS = 'FETCH_ITEMS_BY_CATEGORY_SUCCESS';
export const FETCH_ITEM_BY_ID_SUCCESS = 'FETCH_ITEM_BY_ID_SUCCESS';
export const POST_ITEM_SUCCESS = 'POST_ITEM_SUCCESS';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';

export const fetchAllItemsSuccess = items => ({type: FETCH_ALL_ITEMS_SUCCESS, items});
export const fetchItemsByCategorySuccess = items => ({type: FETCH_ITEMS_BY_CATEGORY_SUCCESS, items});
export const fetchItemByIdSuccess = item => ({type: FETCH_ITEM_BY_ID_SUCCESS, item});
export const postItemSuccess = () => ({type: POST_ITEM_SUCCESS});
export const deleteItemSuccess = () => ({type: DELETE_ITEM_SUCCESS});

export const fetchAllItems = () => {
  return async dispatch => {
    const response = await axiosOrders.get('/items');

    response.data.reverse();

    dispatch(fetchAllItemsSuccess(response.data));
  }
};

export const fetchItemById = itemId => {
  return async dispatch => {
    const response = await axiosOrders.get('/items/' + itemId);

    dispatch(fetchItemByIdSuccess(response.data))
  }
};

export const fetchItemsByCategory = categoryId => {
  return async dispatch => {
    const response = await axiosOrders.get('/items/' + categoryId);

    response.data.reverse();

    dispatch(fetchItemsByCategorySuccess(response.data));
  }
};

export const postItem = itemData => {
  return async (dispatch, getState) => {
    try{
      const user = getState().users.user;

      await axiosOrders.post('items', itemData, {headers: {'Authorization': 'Token ' + user.token}});

      dispatch(postItemSuccess());
      dispatch(push('/'));
    }catch(error){
      console.log(error);
    }
  }
};

export const deleteItem = itemId => {
  return async (dispatch, getState) => {
    try{
      const user = getState().users.user;

      await axiosOrders.delete('items/' + itemId, {headers: {'Authorization': 'Token ' + user.token}});

      dispatch(deleteItemSuccess());
      dispatch(push('/'));
    }catch(error){
      console.log(error);
    }
  }
};
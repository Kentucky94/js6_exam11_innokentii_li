import axiosOrders from "../../axiosOrders";

export const FETCH_ALL_ITEMS_SUCCESS = 'FETCH_ALL_ITEMS_SUCCESS';
export const FETCH_ITEMS_BY_CATEGORY_SUCCESS = 'FETCH_ITEMS_BY_CATEGORY_SUCCESS';
export const FETCH_ITEM_BY_ID_SUCCESS = 'FETCH_ITEM_BY_ID_SUCCESS';
export const POST_ITEM_SUCCESS = 'POST_ITEM_SUCCESS';

export const fetchAllItemsSuccess = items => ({type: FETCH_ALL_ITEMS_SUCCESS, items});
export const fetchItemsByCategorySuccess = items => ({type: FETCH_ITEMS_BY_CATEGORY_SUCCESS, items});
export const fetchItemByIdSuccess = item => ({type: FETCH_ITEM_BY_ID_SUCCESS, item});
export const postItemSuccess = () => ({type: POST_ITEM_SUCCESS});

export const fetchAllItems = () => {
  return async dispatch => {
    const response = await axiosOrders.get('/items');

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

    dispatch(fetchItemsByCategorySuccess(response.data));
  }
};

export const postItem = itemData => {
  return async (dispatch, getState) => {
    try{
      const user = getState().users.user;

      await axiosOrders.post('items', itemData, {headers: {'Authorization': 'Token ' + user.token}});

      dispatch(postItemSuccess())
    }catch(error){
      console.log(error);
    }
  }
};
import axiosOrders from "../../axiosOrders";

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE';

export const fetchCategoriesSuccess = categories => ({type: FETCH_CATEGORIES_SUCCESS, categories});
export const fetchCategoriesFailure = error => ({type: FETCH_CATEGORIES_FAILURE, error});
export const fetchCategorySuccess = category => ({type: FETCH_CATEGORY_SUCCESS, category});
export const fetchCategoryFailure = error => ({type: FETCH_CATEGORY_FAILURE, error});

export const fetchCategories = () => {
  return async dispatch => {
    try{
      const response = await axiosOrders.get('/categories');

      dispatch(fetchCategoriesSuccess(response.data))
    }catch(error){
      dispatch(fetchCategoriesFailure(error))
    }
  }
};

export const fetchCategory = categoryId => {
  return async dispatch => {
    try{
      const response = await axiosOrders.get('/categories/' + categoryId);

      dispatch(fetchCategorySuccess(response.data))
    }catch(error){
      dispatch(fetchCategoryFailure(error))
    }
  }
};
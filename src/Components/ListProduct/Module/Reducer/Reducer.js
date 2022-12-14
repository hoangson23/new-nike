import * as ActionType from "../Constants/Constant";
const GenderAndTypeProduct = JSON.parse(
  localStorage.getItem("GenderAndTypeProduct")
);
const search = JSON.parse(localStorage.getItem("search"));

let initialState = {
  typeProduct: GenderAndTypeProduct?.typeProduct,
  gender: GenderAndTypeProduct?.gender,
  data: [],
  isLoading: false,
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_API_LIST_PRODUCT:
      state.data = payload;
      break;
    case ActionType.IS_LOADING_LIST_PRODUCT:
      state.isLoading = payload;
      break;
    default:
      break;
  }
  return { ...state };
};
export default reducer;

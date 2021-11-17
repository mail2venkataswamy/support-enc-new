const PriceEditingReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return { isModalOpen: !action.isModalOpen };
    default:
      return state;
  }
};

export default PriceEditingReducer;

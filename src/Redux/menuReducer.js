import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showMenu: false
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setShowMenu: (state, action) => {
      const showMenu = action.payload;
      state.showMenu = showMenu;
    },
  },
});



export const { setShowMenu } = menuSlice.actions;

export default menuSlice.reducer;

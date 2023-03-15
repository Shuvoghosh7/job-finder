const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    type: {},
};

const filterSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.type=action.payload
        },
        
    },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched } = filterSlice.actions;

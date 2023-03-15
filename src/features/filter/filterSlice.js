const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    type: {},
    search: "",
};

const filterSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.type=action.payload
        },
        searched: (state, action) => {
            state.search = action.payload;
        },
        
    },
});

export default filterSlice.reducer;
export const { tagSelected, searched } = filterSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const qaSlice = createSlice({
  name: "qa",
  initialState: {
    questions: [
      {
        id: 6,
        question: "Salam?",
        answers: [
          {
            answer:'Eleykum salam'
          }
        ],
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.questions.push(action.payload);
    },
    answer: (state, action) => {
      state.answers.push(action.payload)
  }
  },
});

export default qaSlice.reducer;

export const { add, answer } = qaSlice.actions;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const MIN = 10;
const MAX = 1000000;

export interface ICard {
  id: number,
  title: string;
}

interface CardsState {
  data: ICard[];
  baseCard: ICard | undefined;
}

const initialState: CardsState = {
  data: [],
  baseCard: undefined
}

export const ActionCardSlice = createSlice({
  name: 'actionCard',
  initialState,
  reducers: {
    deleteCard: (state, action: PayloadAction<number>) => {
      const findCard = state.data.find(item => item.id === action.payload);
      
      if (findCard) {
        const index = state.data.indexOf(findCard);
        state.data.splice(index, 1);
      }

      if (findCard?.id === state.baseCard?.id) {
        state.baseCard = undefined;
      }
    },
    addCard: (state, action: PayloadAction<string>) => {
      const id = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
      state.data.push({
        id: id,
        title: action.payload
      })
    },
    baseCard: (state, action: PayloadAction<number>) => {
      state.baseCard = state.data.find(item => item.id === action.payload);
    }
  }
})

export default ActionCardSlice.reducer;
export const { deleteCard, addCard, baseCard } = ActionCardSlice.actions;
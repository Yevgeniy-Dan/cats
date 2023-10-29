import { Cat } from 'src/app/interfaces/Cat';

export interface CatsState {
  cats: Cat[];
}

export const initialState: CatsState = {
  cats: [],
};

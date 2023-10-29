import { Cat } from 'src/app/interfaces/Cat';

export interface CatsState {
  cats: Cat[];
  loading: boolean;
}

export const initialState: CatsState = {
  cats: [],
  loading: true,
};

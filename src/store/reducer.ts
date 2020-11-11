import { AnyAction } from 'redux';
import { createFullGrid, removeNumbers } from '../utils';

import { IReducer } from './interfaces';
import * as types from './types';

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction): IReducer {
	switch (action.type) {
		case types.CREATE_GRID:
			return {
				...state,
				grid: removeNumbers(createFullGrid()),
			};
		case types.SELECT_BLOCK:
			return {
				...state,
				selectedBlock: action.coords,
			};
		default:
			return state;
	}
}

export default reducer;

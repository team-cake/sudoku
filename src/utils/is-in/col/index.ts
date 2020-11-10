import { GRID, NUMBERS } from '../../../typings';

interface IInput {
	col: number;
	grid: GRID;
	value: NUMBERS;
}

/**
 *  A function that returns true if the value is already being used in the current grid column
 * @param param0 Object with 9x9 sudoku Grid, column index and value
 */
function isInCol({ col, grid, value }: IInput): boolean {
	for (let i = 0; i < 9; i++) {
		if (value === grid[i][col]) return true;
	}
	return false;
}

export default isInCol;

import { GRID, NUMBERS } from '../../../typings';

interface IInput {
	grid: GRID;
	row: number;
	value: NUMBERS;
}

/**
 * a function that returns true if the value is already being used in the current grid row
 * @param input Object with 9x9 sudoku grid, row index, and value
 */
function isInRow({ grid, row, value }: IInput): boolean {
	return grid[row].includes(value);
}

export default isInRow;

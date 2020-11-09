import { GRID, NUMBERS } from '../../typings';
import { shuffle } from '../../utils';

const gridExample: GRID = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * a backtracking / recursive function to check all the possible combinations of numbers until a solution is found
 * @param grid 9x9 Sudoku grud
 *
 */
function fillGrid(grid: GRID) {
	let row = 0;
	let col = 0;

	for (let i = 0; i < 81; i++) {
		row = Math.floor(i / 9);
		col = i % 9;

		if (grid[row][col] === 0) {
			shuffle(numbers);

			for (let value of numbers) {
				// is it not in the grid row?
				// is it not in the grid column?
				// is it not in the grid square?
				// if so
				grid[row][col] = value;
				// check grid if it is full, if so, stop and return true
				// otherwise we run fullGrid(grid) again
			}

			break;
		}
	}

	grid[row][col] = 0;
}

export default fillGrid;

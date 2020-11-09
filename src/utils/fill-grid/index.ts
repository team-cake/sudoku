import { GRID } from '../../typings';

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
			// Do things
			// recursive loop
			break;
		}
	}

	grid[row][col] = 0;
}

export default fillGrid;

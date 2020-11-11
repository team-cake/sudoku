import { GRID } from '../../typings';
import { getRandomIndex } from '../../utils';

/**
 * Removes numbers from a full grid to create a sudoku puzzle
 * @param grid : 9x9 sudoku grid
 * @param attempts : number of attempts to solve (higher means more difficult) - default is 5
 */
function removeNumbers(grid: GRID, attempts = 5): GRID {
	while (attempts > 0) {
		let row = getRandomIndex();
		let col = getRandomIndex();

		while (grid[row][col] === 0) {
			row = getRandomIndex();
			col = getRandomIndex();
		}

		const backup = grid[row][col];
		grid[row][col] = 0;

		// copy grid

		// set a global counter
		// attempt to solve the grid

		// if global counter is not 1
		// grid[row][col] = backup
		// decrement attempts
	}
	return grid;
}

export default removeNumbers;

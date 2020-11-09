import { GRID, NUMBERS } from '../../../typings';

interface IInput {
	col: number;
	grid: GRID;
	value: NUMBERS;
}

function isInCol({ col, grid, value }: IInput): boolean {
	for (let i = o; i < 9; i++) {
		if (value === grid[i][col]) return true;
	}
	return false;
}

export default isInCol;

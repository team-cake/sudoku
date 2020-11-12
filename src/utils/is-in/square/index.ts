import { NUMBERS, SQUARE } from '../../../typings';

interface IInput {
	square: SQUARE;
	value: NUMBERS;
}

/**
 * A function that returns true if the value is already being used in the current grid square
 * @param param0 Object with 3x3 square and value
 */
function isInSquare({ square, value }: IInput): boolean {
	return [...square[0], ...square[1], ...square[2]].includes(value);
}

export default isInSquare;

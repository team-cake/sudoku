import React, { Children, FC, useCallback, useEffect } from 'react';
import useMousetrap from 'react-hook-mousetrap';

import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { createGrid, IReducer, selectBlock } from '../../store';
import { BLOCK_COORDS, INDEX } from '../../typings';

import Block from './block';
import { Container, Row } from './styles';

interface IState {
	selectedBlock?: BLOCK_COORDS;
}

const Grid: FC = () => {
	const state = useSelector<IReducer, IState>(({ selectedBlock }) => ({
		selectedBlock,
	}));
	const dispatch = useDispatch<Dispatch<AnyAction>>();

	// UseCallback dispatches the createGrid
	const create = useCallback(() => dispatch(createGrid()), [dispatch]);

	useEffect(() => {
		create();
	}, [create]);

	function moveDown() {
		if (state.selectedBlock && state.selectedBlock[0] < 8)
			dispatch(
				selectBlock([(state.selectedBlock[0] + 1) as INDEX, state.selectedBlock[1]])
			);
	}

	function moveLeft() {
		if (state.selectedBlock && state.selectedBlock[1] > 0)
			dispatch(
				selectBlock([state.selectedBlock[0], (state.selectedBlock[1] - 1) as INDEX])
			);
	}

	function moveRight() {
		if (state.selectedBlock && state.selectedBlock[1] < 8)
			dispatch(
				selectBlock([state.selectedBlock[0], (state.selectedBlock[1] + 1) as INDEX])
			);
	}

	function moveUp() {
		if (state.selectedBlock && state.selectedBlock[0] > 0)
			dispatch(
				selectBlock([(state.selectedBlock[0] - 1) as INDEX, state.selectedBlock[1]])
			);
	}

	useMousetrap('1', () => console.log(1));
	useMousetrap('2', () => console.log(2));
	useMousetrap('3', () => console.log(3));
	useMousetrap('4', () => console.log(4));
	useMousetrap('5', () => console.log(5));
	useMousetrap('6', () => console.log(6));
	useMousetrap('7', () => console.log(7));
	useMousetrap('8', () => console.log(8));
	useMousetrap('9', () => console.log(9));
	useMousetrap('down', moveDown);
	useMousetrap('left', moveLeft);
	useMousetrap('right', moveRight);
	useMousetrap('up', moveUp);

	return (
		<Container>
			{Children.toArray(
				[...Array(9)].map((_, rowIndex) => (
					<Row>
						{Children.toArray(
							[...Array(9)].map((_, colIndex) => (
								<Block colIndex={colIndex as INDEX} rowIndex={rowIndex as INDEX} />
							))
						)}
					</Row>
				))
			)}
		</Container>
	);
};

export default Grid;

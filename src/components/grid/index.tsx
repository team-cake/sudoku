import React, { Children, FC, useCallback, useEffect } from 'react';
import useMousetrap from 'react-hook-mousetrap';

import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { createGrid, IReducer } from '../../store';
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
		if (state.selectedBlock && state.selectedBlock[0] < 8) console.log('down');
	}

	function moveLeft() {
		if (state.selectedBlock && state.selectedBlock[1] > 0) console.log('left');
	}

	function moveRight() {
		if (state.selectedBlock && state.selectedBlock[1] < 8) console.log('right');
	}

	function moveUp() {
		if (state.selectedBlock && state.selectedBlock[0] > 0) console.log('up');
	}

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
								<Block
									colIndex={colIndex as INDEX}
									rowIndex={rowIndex as INDEX}
								/>
							))
						)}
					</Row>
				))
			)}
		</Container>
	);
};

export default Grid;

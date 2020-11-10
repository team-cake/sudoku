import React, { Children, FC, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { createGrid } from '../../store';
import { INDEX } from '../../typings';

import Block from './block';
import { Container, Row } from './styles';

const Grid: FC = () => {
	const dispatch = useDispatch<Dispatch<AnyAction>>();

	// UseCallback dispatches the createGrid
	const create = useCallback(() => dispatch(createGrid()), [dispatch]);

	useEffect(() => {
		create();
	}, [create]);

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

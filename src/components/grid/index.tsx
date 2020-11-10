import React, { FC, Children } from 'react';

import { createFullGrid } from '../../utils';

import Block from './block';
import { Container, Row } from './styles';

const Grid: FC = () => {
	const grid = createFullGrid();
	console.log(grid);

	return (
		<Container>
			{Children.toArray(
				[...Array(9)].map((_, rowIndex) => (
					<Row>
						{Children.toArray(
							[...Array(9)].map((_, colIndex) => (
								<Block colIndex={colIndex} rowIndex={rowIndex} />
							))
						)}
					</Row>
				))
			)}
		</Container>
	);
};

export default Grid;

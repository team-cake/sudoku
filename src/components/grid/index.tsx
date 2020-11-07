import React, { FC, Children } from 'react';

import Block from './block';
import { Container, Row } from './styles';

const Grid: FC = () => {
	// Other stuff on the way

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

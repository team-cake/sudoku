import React, { Children, FC } from 'react';
import { Container, Row } from './styles';

const Grid: FC = () => {
	// Other stuff on the way

	return (
		<Container>
			{Children.toArray(
				[...Array(9)].map((_, rowIndex) => (
					<Row>
						{Children.toArray([...Array(9)].map((_, colIndex) => <div>0</div>))}
					</Row>
				))
			)}
		</Container>
	);
};

export default Grid;

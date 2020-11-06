import React, { Children, FC } from 'react';

const Grid: FC = () => {
	// Other stuff on the way

	return (
		<div>
			{Children.toArray(
				[...Array(9)].map((_, rowIndex) => (
					<div>
						{Children.toArray([...Array(9)].map((_, colIndex) => <div></div>))}
					</div>
				))
			)}
		</div>
	);
};

export default Grid;

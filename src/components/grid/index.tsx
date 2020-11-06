import React, { FC } from 'react';

const Grid: FC = () => {
	// Other stuff on the way

	return (
		<div>
			{[...Array(9)].map((_, rowIndex) => (
				<div key={rowIndex}>
					{[...Array(9)].map((_, colIndex) => (
						<div key={colIndex}></div>
					))}
				</div>
			))}
		</div>
	);
};

export default Grid;

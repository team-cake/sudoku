import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { IReducer } from '../../../store';
import { N } from '../../../typings';

import { Container } from './styles';

interface IProps {
	colIndex: number;
	rowIndex: number;
}

interface IState {
	value: N;
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
	const state = useSelector<IReducer, IState>(({}) => ({ value: 0 }));

	return (
		<Container data-cy={`block-${rowIndex}-${colIndex}`}>
			{state.value}
		</Container>
	);
};

export default Block;

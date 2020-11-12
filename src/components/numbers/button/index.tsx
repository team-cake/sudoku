import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { Button } from '../../../components';
import { fillBlock, IReducer } from '../../../store';
import { BLOCK_COORDS, N, NUMBERS } from '../../../typings';

interface IProps {
	value: NUMBERS;
}

interface IState {
	selectedBlock?: BLOCK_COORDS;
	selectedValue: N;
}

const NumberButton: FC<IProps> = ({ value }) => {
	function fill() {
		console.log('fill', value);
	}

	return <Button onClick={fill}>{value}</Button>;
};

export default NumberButton;

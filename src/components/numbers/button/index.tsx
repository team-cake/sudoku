import React, { FC } from 'react';
import { NUMBERS } from '../../../typings';

import { Button } from '../../../components';
interface IProps {
	value: NUMBERS;
}

const NumberButton: FC<IProps> = ({ value }) => {
	function fill() {
		console.log('fill', value);
	}

	return <Button onClick={fill}>{value}</Button>;
};

export default NumberButton;

import styled, { css } from 'styled-components';

export const Name = styled.h1`
	${({ theme }) => css`
		color: ${theme.colors.white};
		margin-top: 5px;
		text-align: center;
		font-size: 15px;
	`}
`;

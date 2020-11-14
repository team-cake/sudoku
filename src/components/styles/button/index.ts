import styled, { css } from 'styled-components';

export const Button = styled.button`
	${({ theme }) => css`
		align-items: center;
		background-color: ${theme.colors.black};
		border: 2px solid ${theme.colors.black};
		border-radius: 4px;
		color: ${theme.colors.white};
		cursor: pointer;
		display: flex;
		flex: 1;
		font-size: 16px;
		font-weight: bold;
		height: 40px;
		justify-content: center;
		margin: 4px 2px;
		min-height: 40px;
		opacity: 0.9;
		transition: ${theme.transition};
		transition: all 0.2s;

		&:hover {
			transform: translateY(-2px);
			box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
		}

		&:active {
			transform: translateY(0px);
			outline: none;
		}
	`}
`;

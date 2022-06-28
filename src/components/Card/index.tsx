import React, { FC, ReactElement, ReactNode } from 'react';

import './index.scss';

type IProps = {
	children?: ReactNode | ReactElement,
	dataTest?: string;
}

const Card: FC<IProps> = ({children, dataTest='data-card'}) => {
	return (
		<div className="card" data-testid={dataTest}>
			{children}
		</div>
	)
}

export default Card;
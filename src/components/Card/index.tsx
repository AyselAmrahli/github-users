import React, { FC, ReactElement, ReactNode } from 'react';

import './index.scss';

type IProps = {
	children?: ReactNode | ReactElement,
}

const Card: FC<IProps> = ({children}) => {
	return (
		<div className="card">
			{children}
		</div>
	)
}

export default Card;
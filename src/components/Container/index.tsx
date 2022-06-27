import React, { FC, ReactElement, ReactNode } from 'react';

import './index.scss';

type IProps = {
	children: ReactNode | ReactElement
}

const Container: FC<IProps> = ({children}) => {
	return (
		<div className="container">
			{children}
		</div>
	)
}

export default Container;
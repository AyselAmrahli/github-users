import React, { FC, ReactNode } from 'react';

import './index.scss';

type IProps = {
  onClick: any;
  children: ReactNode;
  disabled?: boolean;
  dataTest?: string;
}

const Button: FC<IProps> = ({onClick, children, disabled = false, dataTest="data-test-button"}) => {
	return (
		<button
      className="button"
      onClick={onClick}
      disabled={disabled}
      data-testid={dataTest}
    >
      {children}
		</button>
	)
}

export default Button;
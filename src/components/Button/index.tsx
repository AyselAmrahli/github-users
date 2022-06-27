import React, { FC, ReactNode } from 'react';

import './index.scss';

type IProps = {
  onClick: any;
  children: ReactNode;
  disabled?: boolean;

}

const Button: FC<IProps> = ({onClick, children, disabled = false}) => {
	return (
		<button
      className="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
		</button>
	)
}

export default Button;
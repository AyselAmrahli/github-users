import React, { FC, ReactNode } from 'react';

type IProps = {
  children: ReactNode;
}

const List: FC<IProps> = ({children}) => {
	return <ul className="list">{children}</ul>
}

export default List;
import React, { FC, ReactNode } from 'react';

import './index.scss';

type IProps = {
  children: ReactNode;
}

const ListItem: FC<IProps> = ({children}) => {
	return <li className="list_item">{children}</li>
}

export default ListItem;
import React, { FC } from 'react';
import Container from '../Container';

import './index.scss';

const Header: FC = () => {
	return (
		<header className="header">
			<Container>
        <h4>Github Users</h4>
      </Container>
		</header>
	)
}

export default Header;
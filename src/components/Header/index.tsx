import React, { FC } from 'react';
import Container from '../Container';

import './index.scss';

const Header: FC = () => {
	return (
		<header className="header" data-testid="data-header">
			<Container>
        <h4 data-testid="data-header-content">Github Users</h4>
      </Container>
		</header>
	)
}

export default Header;
import React, { FC } from 'react';

import './index.scss';

type IProps = {
	placeholder?: string,
	defaultValue?: string,
	onChange: any,
	dataTest?: string;
}

const SearchField: FC<IProps> = ({placeholder = 'Search', defaultValue, onChange, dataTest='data-search-input'}) => {
	return (
		<div className="search">
			<input
				type="text"
				value={defaultValue}
				placeholder={placeholder}
				onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
				data-testid={dataTest}
			/>
		</div>
	)
}

export default SearchField;
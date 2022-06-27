import React, { FC } from 'react';

import './index.scss';

type IProps = {
	placeholder?: string,
	defaultValue?: string,
	onChange: any,
}

const SearchField: FC<IProps> = ({placeholder = 'Search', defaultValue, onChange}) => {
	return (
		<div className="search">
			<input
				type="text"
				value={defaultValue}
				placeholder={placeholder}
				onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
			/>
		</div>
	)
}

export default SearchField;
/** @format */

import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
	return (
		<Fragment>
			<img
				src={spinner}
				alt='loading....'
				style={{ width: '200px', margin: 'auto', display: 'bock' }}
			/>
		</Fragment>
	);
};

export default Spinner;

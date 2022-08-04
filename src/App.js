/** @format */
import './App.css';
import React, { Component } from 'react';
import Navbar from './component/layout/Navbar';
import Users from './users/Users';
import axios from 'axios';

class App extends Component {
	state = {
		users: [],
		loading: false,
	};

	async componentDidMount() {
		this.setState({ loading: true });

		const res = await axios.get('https://api.github.com/users');

		this.setState({ users: res.data, loading: false });
	}

	render() {
		// const name = 'JOhn Doe';
		return (
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;

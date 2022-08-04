/** @format */
import './App.css';
import React, { Component } from 'react';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import Search from './component/users/Search';
import axios from 'axios';

class App extends Component {
	state = {
		users: [],
		loading: false,
	};

	// async componentDidMount() {
	// 	this.setState({ loading: true });

	// 	const res = await axios.get('https://api.github.com/users');

	// 	this.setState({ users: res.data, loading: false });
	// }

	// search github users
	searchUsers = async text => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}`
		);

		this.setState({ users: res.data.items, loading: false });
	};
	//clear users
	clearUsers = () => {
		this.setState({ users: [], loading: false });
	};

	render() {
		const { users, loading } = this.state;
		// const name = 'JOhn Doe';
		return (
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Search
						searchUsers={this.searchUsers}
						clearUsers={this.clearUsers}
						showClear={users.length > 0 ? true : false}
					/>
					<Users loading={loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;

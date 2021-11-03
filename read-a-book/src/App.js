
import './App.css';
import React  from 'react';
import MyNavbar from './Components/MyNavbar';
import Routes from './Components/Routes';

function App() {
 

	return (
		<div className='App'>
			<main>
				<MyNavbar />
				<Routes />
			</main>
			<footer></footer>
		</div>
	);
}

export default App;

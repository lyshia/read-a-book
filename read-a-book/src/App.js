
import './App.css';
import Home from './Home';
import { Route } from 'react-router-dom';


function App() {
	return (
		<div className='App'>
			
			<main>
	
          <Route path='/' exact component={Home} />
			</main>
			<footer></footer>
		</div>
	);
}

export default App;

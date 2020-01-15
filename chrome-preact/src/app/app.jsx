import { h, Component } from 'preact';
import './app.scss'; 

class App extends Component {
    render() {
        return <div id="app-root"><h1>Hello, world!</h1>
            <form> 
                <input type="text" />
                <button type="submit">Learn More</button>
                <button type="submit">Donate</button>
                <button type="submit">Volunteer</button>
            </form>
        </div>
    }
}

export default App;

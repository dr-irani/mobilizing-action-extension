import { h, Component } from 'preact';
import './app.scss'; 

chrome.tabs.query({active:true}, function(tab){
    console.log("here"); 
    console.log(tab[0].url); 
})
class App extends Component {
    render() {
        return <div id="app-root"><h1>EMPACT</h1>
            <form> 
                <input type="text" />
                <button id="learn" type="submit">Learn More</button>
                <button type="submit">Donate</button>
                <button type="submit">Volunteer</button>
            </form>
        </div>
    }
}

export default App;

// getting the link / url and console log 
import { h, Component } from 'preact';
import './app.scss'; 
import axios from 'axios'; 

var url = "hello"
function init(){
    chrome.tabs.query({active:true}, function(tab){
        console.log("here"); 
        console.log(tab[0].url); 
        url = tab[0].url;
        processTab();  
    })
}

function processTab(){
    console.log("Processing url tab")
    console.log(url); 
}

class App extends Component {
    state = {
        error: null, 
        isLoaded: false, 
        items: []
    }; 

    // block comments in VSCode: SHIFT + ALT + A
    /* componentDidMount in React: is executed after the first render only on the client side. 
    This is where AJAX requests and DOM or state updates should occur. 
    This method is also used for integration with other JavaScript 
    frameworks and any functions with delayed execution such as setTimeout 
    or setInterval. We are using it to update the state so we can trigger 
    the other lifecycle methods. */
    componentDidMount(){
    init(); 
    // axios.get("https://jsonplaceholder.typicode.com/users").then(
    axios.get("http://localhost:8000/app").then(
      result => {
        this.setState({
          isLoaded: true,
          items: result.data
        });
        // console.log(result.data); 
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
      );
    axios.post("http://localhost:8000/update",
            // chrome.tabs.query({active:true}, function(tab){
            //     console.log("testing post")
            //     console.log(tab[0].url); 
            //     tab[0].url; 
            // })
            url
            , null)
    }
    render() {
        const {error, isLoaded, items} = this.state; 
        if (error) {
            return <div> Error: {error.message} </div>
        } else if (!isLoaded) {
            return <div> Loading ... </div>; 
        } else {
            return(
                <div id="app-root"><h1>EMPACT</h1>
                <form> 
                    <input type="text" />
                    <button id="learn" type="submit">Learn More</button>
                    <button type="submit">Donate</button>
                    <button type="submit">Volunteer</button>
                </form>
                <ul>
                    {items}
                </ul>
                </div>
            ); 
        }
        
    }
}

export default App;

// getting the link / url and console log 
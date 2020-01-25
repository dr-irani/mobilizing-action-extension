// content jsx is just the root entry into app.jsx... and then it's transpiled 
// into content.js which is then called by content.html
// so mainly need to edit app.jsx 
import { h, render } from 'preact';
import App from './app/app';

render(<App />, document.body);

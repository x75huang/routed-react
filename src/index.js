import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider} from "material-ui";
import {Route, Router} from "react-router";
import Owner from "./Components/Owner";
import injectTapEventPlugin from 'react-tap-event-plugin'
//
// injectTapEventPlugin()
//
// const Root = () => (
//     <MuiThemeProvider>
//         <Router>
//             <Route path="/" component={App}>
//                 <Route path="owner" component={Owner} />
//             </Route>
//         </Router>
//     </MuiThemeProvider>
// )

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

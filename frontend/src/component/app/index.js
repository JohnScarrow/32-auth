import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import appStoreCreate from '../../lib/app-create-store.js';
import Dashboard from '../dashboard';

const store = appStoreCreate();

class App extends React.Component {
  render() {
    return(
      <span id="app">
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <nav>
                <ul>
                  <li><Link to='/welcome/signup'>signup</Link></li>
                  <li><Link to='/welcome/signin'>login</Link></li>
                </ul>
              </nav>
              <Route path='/welcome/:auth' component={Dashboard} />
            </section>
          </BrowserRouter>
        </Provider>
      </span>
    )
  }
}

export default App;

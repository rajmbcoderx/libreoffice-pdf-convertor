import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DownloadAndPreview from './component/DownloadAndPreview'
import Upload from './/component/Upload'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
 
    return (
      <BrowserRouter>
      <div className="container">
        <div className="row">         
          <Switch>
              <Route exact path="/"  {...this.props} component={Upload} />
              <Route path="/download"   {...this.props} component={DownloadAndPreview} />
            </Switch>
        </div>
      </div>
      </BrowserRouter>
    )
}
}


export default App;

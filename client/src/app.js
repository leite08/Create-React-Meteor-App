import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Documents from '../../import/Documents'

import './app.css';

class app extends Component {
  render() {
    const { documents } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://cdn.worldvectorlogo.com/logos/react.svg" className="App-logo" alt="logo" />
          <img src="https://cdn.worldvectorlogo.com/logos/meteor-icon.svg" className="App-logo" alt="logo" />
          <h2>Welcome to React-Meteor</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>List of Documents:</p>
        {documents && documents.length > 0 ?
          <ul>
            {documents.map(doc => (
              <li>{doc.name} | {doc.company.name}</li>
            ))}
          </ul>
        :
          <div>No documents yet.</div>
        }
      </div>
    );
  }
}

// export default app;
export default withTracker(() => {
  const subscription = Meteor.subscribe('document.list');
  const docs = Documents.find().fetch();
  docs.forEach( doc => console.log(`[withTracker] ..... ${JSON.stringify(doc)}`) );
  return {
    loading: !subscription.ready(),
    documents: docs
  };
})(app);
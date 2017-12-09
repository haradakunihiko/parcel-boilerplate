import React from 'react';

class Application extends React.Component {
  render() {
    return (
      <div>
        Hello React HMR with Parcel World!!!
        <br />
        <input style={{width: '300px'}} placeholder="input something and fix Applciation.js file to see HMR" />
      </div>
    );
  }  
}

export default Application;

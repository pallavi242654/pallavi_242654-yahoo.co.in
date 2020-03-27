import React, { Component } from 'react';
import LeftMenu from '../components/LeftMenu.jsx';
import Tabs from '../components/Tabs.jsx';

class Main extends Component {  
  
  render() {      
    return (    
    <div className="body">      
      <div className="main-section">
        <div className="header">
          <div className="heroText">DBS Mockup</div>
        </div>
        <div className="w-row">
          <div className="w-col w-col-1">
            <LeftMenu />
          </div>
          <div className="maincontent w-col w-col-11">
            <Tabs />
          </div>
        </div>
      </div> 
    </div>
    )
  }
}

export default Main;

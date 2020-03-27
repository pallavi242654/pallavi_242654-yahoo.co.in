import React, { Component } from 'react';
import MenuItem from './MenuItem.jsx';

class LeftMenu extends Component {
  constructor(props) {
    super(props);  
    
    this.state ={
      activeMenu: 'rfq',    
      menuArr:[
        {id:'rfq', name:'RFQ', image: 'images/bank.svg' , type:'main'},
        {id:'order', name:'Order', image: 'images/order.svg', type:'sub'},
        {id:'reports', name:'Reports', image: 'images/stats.svg', type:'sub'},
        {id:'monitor', name:'Monitor Screens', image: 'images/monitor.svg', type:'sub'},
        {id:'settings', name:'Settings', image: 'images/settings.svg', type:'sub'},
        {id:'access', name:'Access Rights', image: "images/access.svg", type:'main'},
        {id:'market', name:'Market Data', image: 'images/market.svg', type:'main'},      
      ]
    }

    this.setActiveMenu = this.setActiveMenu.bind(this);
  }

  setActiveMenu(data){
    //let menu = event.target.getAttribute('data-menu');       
    //this.setState({currentMenu:menu})
    console.log(data);
    this.setState({activeMenu:data});
  }  
  
  render() {      

    let menuitems = this.state.menuArr.map((item, key) =>
      <MenuItem key={item.id} data={item} activeMenu={this.state.activeMenu} setActiveMenu={this.setActiveMenu} />
    );

    return (    
      <div className="menuwrapper">
        {/*<div className="menuitem main" data-menu="rfq" onClick={this.setActiveMenu}>
          <img src="images/bank.svg" alt="" className="menuimg" data-menu="rfq"  />
          <div className="menutext" data-menu="rfq" >RFQ</div>
        </div>
        <div className="menuitem" data-menu="order" onClick={this.setActiveMenu}>
          <img src="images/order.svg" alt="" className="menuimg" data-menu="order" />
          <div className="menutext">Order</div>
        </div>
        <div className="menuitem" data-menu="reports" onClick={this.setActiveMenu}>
          <img src="images/stats_colourful.svg" alt="" className="menuimg" />
          <div className="menutext">Reports</div>
        </div>
        <div className="menuitem" data-menu="monitor" onClick={this.setActiveMenu}>
          <img src="images/monitor.svg" alt="" className="menuimg" />
          <div className="menutext">Monitor<br />Screens</div>
        </div>
        <div className="menuitem" data-menu="settings" onClick={this.setActiveMenu}>
          <img src="images/settings.svg" alt="" className="menuimg" />
          <div className="menutext">Settings</div>
        </div>
        <div className="menuitem main" data-menu="access" onClick={this.setActiveMenu}>
          <img src="images/access.svg" alt="" className="menuimg" />
          <div className="menutext">Access Rights</div>
        </div>
        <div className="menuitem main" data-menu="market" onClick={this.setActiveMenu}>
          <img src="images/business.svg" alt="" className="menuimg" />
          <div className="menutext">Market Data</div>
        </div>*/}
        {menuitems}
      </div>
    )
  }
}

export default LeftMenu;

import React, { Component } from 'react';
import ServerSidePagination from './ServerSidePagination.jsx';
import GridValueFormatter from './GridValueFormatter.jsx';
import ClientSidePagination from './ClientSidePagination.jsx';

class MenuItem extends Component {
  constructor(props) {
    super(props);         

    this.onClick = this.onClick.bind(this);
  } 

  onClick(){
    this.props.setActiveMenu(this.props.data.id);
  }
  
  render() {     

    let menuClass = "menuitem "+this.props.data.type;
    if(this.props.activeMenu === this.props.data.id){
      menuClass = "menuitem menu-active "+this.props.data.type;
    }
    return (    
      <div className={menuClass}  onClick={this.onClick}>
        <img src={this.props.data.image} alt="" className="menuimg"   />
        <div className="menutext"  >{this.props.data.name}</div>
      </div>
    )
  }
}

export default MenuItem;

import React, { Component } from 'react';
import ServerSidePagination from './ServerSidePagination.jsx';
import GridValueFormatter from './GridValueFormatter.jsx';
import ClientSidePagination from './ClientSidePagination.jsx';

class Tabs extends Component {
  constructor(props) {
    super(props);   

    this.state ={
      currentTab: 'rfq'
    }

    this.setCurrentTab = this.setCurrentTab.bind(this);
  }

  setCurrentTab(event){
    let tab = event.target.getAttribute('data-w-tab');    
    this.setState({currentTab:tab})
  }
  
  render() {   
    
    let rfqclass,quotesclass,excepclass;
    let baseTabClass= 'tablink w-inline-block w-tab-link';
    rfqclass = quotesclass = excepclass = baseTabClass;

    let rfqPaneclass, quotesPaneclass, excepPaneclass;    
    let basePaneClass = 'w-tab-pane';
    rfqPaneclass = quotesPaneclass = excepPaneclass = basePaneClass;

    if (this.state.currentTab === 'rfq') {
      rfqclass = baseTabClass+ ' w--current';
      rfqPaneclass = basePaneClass+ ' w--tab-active';
    }else if(this.state.currentTab === 'quotes'){
      quotesclass = baseTabClass+ ' w--current';
      quotesPaneclass = basePaneClass+ ' w--tab-active';
    }else if(this.state.currentTab === 'exception'){
      excepclass = baseTabClass+ ' w--current';
      excepPaneclass = basePaneClass+ ' w--tab-active';
    }

    return (    
      <div className="navwrapper">
        <div data-duration-in="300" data-duration-out="100" className="w-tabs">
          <div className="tabmenu w-tab-menu">
            <div data-w-tab="rfq" className={rfqclass} onClick={this.setCurrentTab}>
              RFQ (22)
            </div>
            <div data-w-tab="quotes" className={quotesclass} onClick={this.setCurrentTab}>
              Quotes (0)
            </div>
            <div data-w-tab="exception" className={excepclass} onClick={this.setCurrentTab}>
              Exception (25)
            </div>
          </div>
          <div className="w-tab-content">

            <div data-w-tab="rfq" className={rfqPaneclass}>
              <div className="note">* This AGGrid shows the concept of <b>Server side pagination</b> with dummy data.</div>
              <ServerSidePagination />
            </div>

            <div data-w-tab="quotes" className={quotesPaneclass}>
              <div className="note">* This AGGrid shows the concept of <b>valueFormatter</b> i.e Rendering of decimal into %</div>
              <GridValueFormatter />
            </div>

            <div data-w-tab="exception" className={excepPaneclass}>
              <div className="note">* This AGGrid shows the concept of <b>Client Side Pagination, Sorting, Filtering</b> </div>              
              <ClientSidePagination />
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Tabs;

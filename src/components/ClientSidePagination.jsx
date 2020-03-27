import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class AGGrid extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      columnDefs: [
        { headerName: "Make", field: "make", sortable:true, filter:true },
        { headerName: "Model", field: "model", sortable:true, filter:true },
        { headerName: "Price", field: "price", sortable:true, filter:true}],
      rowData: null,        
      paginationPageSize: 50,
      cacheBlockSize: 50,      
    }
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  componentDidMount(){
    fetch('https://api.myjson.com/bins/15psn9')
    .then(res => res.json())
    .then(rowData => this.setState({rowData}))
    .catch(err => console.log(err));
  }
  
  render() {      
    return (    
      <div className="ag-theme-balham" style={ {height: '600px', width: '100%'} }>
        <AgGridReact
            pagination={true}            
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            paginationPageSize={this.state.paginationPageSize}
            cacheBlockSize={this.state.cacheBlockSize}
            onGridReady={this.onGridReady}            
            >
            
        </AgGridReact>
      </div>
    )
  }
}

export default AGGrid;

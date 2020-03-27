
import React, { Component } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-alpine-dark.css';

class GridExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modules: AllCommunityModules,
      columnDefs: [
        {
          headerName: 'A',
          field: 'a',
          maxWidth:300,
          sortable:true, filter:true
        },        
        {
          headerName: 'Decimal formatted to Integer',
          field: 'a',
          valueFormatter: formatDecToInt,
          sortable:true, filter:true
          //maxWidth:600,
        },       
      ],
      defaultColDef: {
        flex: 1,
        cellClass: 'number-cell',
        resizable: true,
       //filter: true,
      },
      rowData: createRowData(),
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

 
  render() {
    return (
      <div style={{ width: '100%', height: '600px' }}>
        <div
          id="myGrid"
          style={{
            height: '100%',
            width: '100%',
          }}
          className="ag-theme-alpine-dark"
        >
          <AgGridReact
            //modules={this.state.modules}
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            rowData={this.state.rowData}
            onGridReady={this.onGridReady}
            pagination={true}
            //enableFilter={true}
            //enableSorting={true}
          />
        </div>
      </div>
    );
  }
}

function formatDecToInt(dec){  
  let int = parseInt(dec.value * 100) + "%";  
  return int;    
}

function createRowData() {
  var rowData = [];
  for (var i = 1; i < 100; i++) {
    rowData.push({      
      a: (i/100),      
    });
  }
  return rowData;
}


export default GridExample;

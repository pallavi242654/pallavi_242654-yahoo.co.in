// This fake server uses http://alasql.org/ to mimic how a real server
// might generate sql queries from the Server-side Row Model request.
// To keep things simple it does the bare minimum to support the example.
export function FakeServer(allData) {
  const alasql = window.alasql;
  alasql.options.cache = false;

  return {
    getData: function(request) {
      var results = executeQuery(request);
      return {
        success: true,
        rows: results,
        lastRow: getLastRowIndex(request, results),
      };
    },
    getCountries: function() {
      var SQL = 'SELECT DISTINCT country FROM ? ORDER BY country asc';
      var result = alasql(SQL, [allData]);
      return result.map(Object.values);
    },
  };

  function executeQuery(request) {
    var SQL = buildSql(request);

    console.log('[FakeServer] - about to execute query:', SQL);

    return alasql(SQL, [allData]);
  }

  function buildSql(request) {
    var select = 'SELECT * ';
    var from = 'FROM ? ';
    var where = whereSql(request);
    var orderBy = orderBySql(request);
    var limit = limitSql(request);

    return select + from + where + orderBy + limit;
  }

  function whereSql(request) {
    var whereParts = [];

    var filterModel = request.filterModel;
    if (filterModel) {
      var columnKeys = Object.keys(filterModel);
      whereParts = columnKeys.map(function(columnKey) {
        var filter = filterModel[columnKey];
        if (filter.filterType === 'set') {
          return columnKey + " IN ('" + filter.values.join("', '") + "')";
        }
        console.log('unsupported filter type: ' + filter.filterType);
        return '';
      });
    }

    if (whereParts.length > 0) {
      return ' WHERE ' + whereParts.join(' AND ') + ' ';
    }

    return '';
  }

  function orderBySql(request) {
    var sortModel = request.sortModel;
    if (sortModel.length === 0) return '';

    var sorts = sortModel.map(function(s) {
      return s.colId + ' ' + s.sort;
    });

    return 'ORDER BY ' + sorts.join(', ') + ' ';
  }

  function limitSql(request) {
    var blockSize = request.endRow - request.startRow;
    return ' LIMIT ' + (blockSize + 1) + ' OFFSET ' + request.startRow;
  }

  function getLastRowIndex(request, results) {
    if (!results || results.length === 0) {
      return request.startRow;
    }
    var currentLastRow = request.startRow + results.length;
    return currentLastRow <= request.endRow ? currentLastRow : -1;
  }
}

export function ServerSideDatasource(server) {
  return {
    getRows: function(params) {
      console.log('[Datasource] - rows requested by grid: ', params.request);

      // get data for request from our fake server
      var response = server.getData(params.request);

      // simulating real server call with a 500ms delay
      setTimeout(function() {
        if (response.success) {
          // supply rows for requested block to grid
          params.successCallback(response.rows, response.lastRow);
        } else {
          params.failCallback();
        }
      }, 500);
    },
  };
}

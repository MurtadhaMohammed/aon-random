function csvFileToJSON(file, cb) {
  try {
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (e) {
      var jsonData = [];
      var headers = [];
      var rows = e.target.result.split("\r\n");
      for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].split(",");
        var rowData = {};
        for (var j = 0; j < cells.length; j++) {
          if (i == 0) {
            var headerName = cells[j].trim();
            headers.push(headerName);
          } else {
            var key = headers[j];
            if (key) {
              rowData[key] = cells[j].trim();
            }
          }
        }
        //skip the first row (header) data
        if (i != 0) {
          jsonData.push(rowData);
        }
      }

      //displaying the json result in string format
      cb(jsonData, null);
    };
  } catch (e) {
    cb(null, e);
  }
}

export default csvFileToJSON;

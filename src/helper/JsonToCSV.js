function JsonToCSV(objArray, filename) {
  var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;

  let head = {};
  Object.keys(array[0]).map((k) => {
    head[k] = k;
  });
  array.splice(0, 0, head);
  var str = "";

  for (var i = 0; i < array.length; i++) {
    var line = "";
    for (var index in array[i]) {
      if (line != "") line += ",";

      line += array[i][index];
    }

    str += line + "\r\n";
  }

  // Download the CSV file
  let anchor = document.createElement("a");
  anchor.href = "data:text/csv;charset=utf-8," + encodeURI(str);
  anchor.target = "_blank";
  anchor.download = `${filename}.csv`;
  anchor.click();
}

export default JsonToCSV;

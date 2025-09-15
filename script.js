function insert_Row() {
  let myTable = document.getElementById("sampleTable");
  let tbody = myTable.tBodies[0] || myTable;

  let newRow = document.createElement("tr");
  newRow.innerHTML = "<td>New Cell1</td><td>New Cell2</td>";

  tbody.prepend(newRow); // clean + safe
}
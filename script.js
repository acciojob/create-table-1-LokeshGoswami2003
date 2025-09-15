function insert_Row() {
    //Write your code here
  let myTable=document.getElementById("sampleTable");
	let newRow=document.createElement("tr");
	newRow.innerHTML="<td>New Cell1</td><td>New Cell2</td>";
	  let firstRow = myTable.getElementsByTagName("tr")[0];
	myTable.insertBefore(newRow,firstRow);
}

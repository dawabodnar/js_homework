var arrData = [];
var listRow = document.querySelector("")   //- список рядків

for(i = 0; i < length.listRow; i++){
	var myObject = {};
	
	myObject.Ip = listRow[i].querySel("td:1").textContext;
	//....
	
	//додати в масив обєкт myObject
}

//for(arrData) {
//print(arrData i);
//}

function print(myObject){
	console.log(myObject.Ip + ":" + myObject.Port + "	" + myObject.Type + "	" + "(" + myObject.Country + ")");
}
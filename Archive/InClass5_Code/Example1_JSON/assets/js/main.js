/* To store your JSON file online you can usee http://myjson.com/
 You would get a URL and you can make calls to that URL*/

// You could also use https://jsonlint.com/ to valid the formating of your JSON file. 

// The reason why we preffer to use JSON is because is human readable


// JSON - Stans for Java Script Object Noation 




/*

	1. Understanding how to build an object and call information inside the object.

*/

// let person={
// 	'firstname':'Karla',
// 	'lastname':'Polo',
// 	'age':30
// };

// console.log(person);
// $('.json-container').append(person.firstname)


// let myData={

// 	'people':[
// 		{
// 			'firstname':'Karla',
// 			'lastname':'Polo',
// 			'age':30
// 		},
// 		{
// 			'firstname':'Brandon',
// 			'lastname':'Palmer',
// 			'age':26
// 		},
// 		{
// 			'firstname':'Leah',
// 			'lastname':'Takele',
// 			'age':29
// 		}

// 	]
// }


// console.log(myData.people[0].lastname)
// $('.json-container').append(myData.people[1].lastname+' '+myData.people[0].lastname)

// let stringpeople=JSON.stringify(myData);
// console.log(stringpeople)
// $('.json-container').append(stringpeople)
// let backtojson = JSON.parse(stringpeople)
// console.log(backtojson)
/*

	2. creating a data set that contains an array of objects

*/






 /*

	3. Stringify the JSON Data and converting it back to JSON format

*/
	





 /*


	4. Understanding for loops and pulling data from a json file.

*/

$.getJSON("./data.json", data=>{
	console.log(data.people);
	let myUsers=data.people;
	for(let i=0; i<myUsers.length;i++){
		$('.json-container').append(myUsers[i].lastname+'<br>')
	}
})
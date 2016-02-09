define(['react', 'game/city/cityConstructor'], function(React, City) {

//City Constructor pulls data from database and builds cities 
//based off of ajax'd data
	City = City;

	var city = React.createClass({
		render: function(){

			var itemNodes = items.map(function(sheetItem, i){
	            if(sheetItem.type == "Income"){
	                monthTotal += Number(sheetItem.amount);
	            } else {
	                monthTotal -= Number(sheetItem.amount);
	            }

	            return (
	                <SheetItem
	                    title = {sheetItem.title}
	                    dateTime = {sheetItem.dateTime}
	                    amount = {"$" + sheetItem.amount}
	                    type = {sheetItem.type}
	                    deleteClick = {monthSheet.props.deleteClick}/>
	            );
	        });
		}
	});



});
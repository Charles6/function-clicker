const clickLog = [0];
const addPoints = (arr,points) => {
	arr[arr.length] = arr[arr.length-1] + points;
	bonusButton(arr[arr.length-1]);
	console.log(arr[arr.length-1]);
	document.getElementById("display").innerHTML = arr[arr.length-1];
};
const bonusButton = (currentPts) => {
	if (currentPts === 10){
		document.getElementById("bonus").innerHTML = 
			"<button onclick='autoClick(clickLog,5,2000)'>Auto-Clicker</button>";
	};
};
const autoClick = (arr2,pts,time) => {
	document.getElementById("bonus").innerHTML = "";
	addPoints(arr2,pts);
	document.getElementById("rate").innerHTML = 
			"auto-click rate: " + (pts/(time/1000)).toFixed(1) + " points/sec";
	setInterval(function() {
		addPoints(arr2,pts);
	},time);
};
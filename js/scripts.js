//Get last modified date of HTML file and print it in the footer
function printDate(){
	let lastMod = document.lastModified;
	
	//'document.lastModified' returns the date in the format mm/dd/yyyy. 
	//Lets convert to UK standard dd/mm/yyyy.
	//We know the format is always the same, so 'rebuild' the string with the 2nd 2 digits first, followed by the first two digits.
	lastMod = lastMod.slice(3,5) + "/" + lastMod.slice(0,2) + "/" + lastMod.slice(6); //Last slice 2nd parameter ommited to include time. Add '10' for just the year. 
	
	lastMod = "Page last updated: " + lastMod;
	document.getElementById("lastUpdated").innerHTML = lastMod;	//Put the date of last update into the HTML
	


	
	//This is only relevant to the timeline on the 'About' page.
	//Cant have multiple 'onload' fucntions. Find alternative method? Perhaps keep in here but do  acheck on file name.
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];	//Create array of months
    var date = new Date();
	document.getElementById("TLPresentDay").innerHTML = months[date.getMonth()] + ' ' + date.getFullYear();	//Put present month/year in the timeline element.
	
}
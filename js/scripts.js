//General javascript fucntions which can be called from the HTML page

//Get last modified date of HTML file and print it in the footer
function printDate(){
	let lastMod = document.lastModified;
	
	//'document.lastModified' returns the date in the format mm/dd/yyyy. 
	//Lets convert to UK standard dd/mm/yyyy.
	//We know the format is always the same, so 'rebuild' the string with the 2nd 2 digits first, followed by the first two digits.
	lastMod = lastMod.slice(3,5) + "/" + lastMod.slice(0,2) + "/" + lastMod.slice(6); //Last slice 2nd parameter ommited to include time. Add '10' for just the year. 
	
	lastMod = "Page last updated: " + lastMod;
	document.getElementById("lastUpdated").innerHTML = lastMod;	//Put the date of last update into the HTML

}

//JS related to the 'return to top' button on ALL pages
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	mybutton.style.display = "block";
  } else {
	mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

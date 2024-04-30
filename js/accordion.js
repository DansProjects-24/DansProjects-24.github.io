var acc = document.getElementsByClassName("accordion-title"); // Select all elements with class "accordion-title"
var i;

// Loop through each accordion title
for (i = 0; i < acc.length; i++) {
	// Add click event listener to each accordion title
	acc[i].addEventListener("click", function() {
		
		var accordionContent = this.nextElementSibling; // Select the content associated with the clicked title
		var chevronIcon = this.querySelector('i'); // Select the chevron icon within the clicked title

		this.classList.toggle("active"); // Toggle active class for accordion title

		// Close all other accordion items
		var allAccordionContent = document.querySelectorAll('.accordion-content'); // Select all elements with class "accordion-content"
		var allAccordionTitles = document.querySelectorAll('.accordion-title'); // Select all elements with class "accordion-title"

		// Collapse all other accordion items except the clicked one
		allAccordionContent.forEach(function(item) { // Loop through each accordion content element
			if (item !== accordionContent) { // Check if the current content is not the one associated with the clicked accordion item
				item.style.display = 'none'; // Hide the accordion content
			}
		});

		// Remove "active" class and change chevron icon for all accordion titles except the clicked one
		allAccordionTitles.forEach(function(title) { // Loop through each accordion title element
			if (title !== this) { // Check if the current title is not the clicked accordion title
				title.classList.remove('active'); // Remove the "active" class from the title
				var icon = title.querySelector('i'); // Select the chevron icon within the title
				icon.classList.remove('fa-angle-down'); // Remove the down-chevron icon class
				icon.classList.add('fa-chevron-right'); // Add the right-chevron icon class
			}
		});

		// Toggle display of accordion content
		if (accordionContent.style.display === "block") {
			accordionContent.style.display = "none";
			// Change chevron icon to right-chevron when collapsing
			chevronIcon.classList.remove('fa-angle-down');
			chevronIcon.classList.add('fa-chevron-right');
		} else {
			accordionContent.style.display = "block";
			// Change chevron icon to down-chevron when expanding
			chevronIcon.classList.remove('fa-chevron-right');
			chevronIcon.classList.add('fa-angle-down');
		}
	});
}

// Function to expand the first accordion item when the page loads
function expandFirstAccordionItem() {
	var firstAccordionTitle = document.querySelector('.accordion-title'); // Select the first accordion title
	firstAccordionTitle.click(); // Trigger a click event on the first accordion title
}

// Call the function after the page has loaded
window.addEventListener('load', expandFirstAccordionItem);
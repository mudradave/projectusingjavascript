// JavaScript for the click confirmation
document.querySelectorAll('.country-img').forEach(item => {
    item.addEventListener('click', function() {
        const countryName = this.alt; // Get the country name from the alt attribute
        const userConfirmed = confirm(`Do you want to visit the Wikipedia page for ${countryName}?`);

        if (userConfirmed) {
            let url = "";

            // Assign Wikipedia URL based on the country clicked
            switch (countryName) {
                case "India":
                    url = "https://en.wikipedia.org/wiki/India";
                    break;
                case "South Korea":
                    url = "https://en.wikipedia.org/wiki/South_Korea";
                    break;
                case "Japan":
                    url = "https://en.wikipedia.org/wiki/Japan";
                    break;
                case "China":
                    url = "https://en.wikipedia.org/wiki/China";
                    break;
                case "Egypt":
                    url = "https://en.wikipedia.org/wiki/Egypt";
                    break;
                case "Philippines":
                    url = "https://en.wikipedia.org/wiki/Philippines";
                    break;
                case "France":
                    url = "https://en.wikipedia.org/wiki/France";
                    break;
                case "Indonesia":
                    url = "https://en.wikipedia.org/wiki/Indonesia";
                    break;
                case "Thailand":
                    url = "https://en.wikipedia.org/wiki/Thailand";
                    break;
                default:
                    break;
            }

            if (url) {
                window.location.href = url; // Redirect to the country's Wikipedia page
            }
        }
    });
});

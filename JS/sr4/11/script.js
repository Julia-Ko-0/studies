
let countries = [
    "Argentina",
    "Australia",
    "Brazil",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Italy",
    "Japan",
    "Mexico",
    "Netherlands",
    "South Africa",
    "Spain",
    "United Kingdom",
    "United States",
    "Russian Federation",
    "Romania",
    "Georgia"
];

let input = document.getElementById("input");
let ul = document.getElementById("ul");

input.addEventListener("input", () => {
    let filter = input.value;
    let filtCountry = countries.filter(country => country.toLowerCase().startsWith(filter));

    filtCountry.forEach(country => {
        let li = document.createElement("li");
        li.textContent = country;

        li.addEventListener("click", () => {
            input.value = country;
            ul.innerHTML = "";
        });

        ul.appendChild(li);
    });
});


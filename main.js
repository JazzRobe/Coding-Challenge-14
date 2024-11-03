//task 2: fetch tickets using async/await and handle errors

const customerTickets = document.getElementById("customerTickets");
const errorMessage = document.getElementById("errorMessage");

async function fetchUnresolvedTickets() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw new Error("Failed to fetch customers.");
    } //error message if fetch fails
    const customer = await response.json();
    console.log(response);
} //function to fetch unresolved customer suport tickets
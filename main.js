const customerTickets = document.getElementById("customerTickets");
const errorMessage = document.getElementById("errorMessage");
const loading = document.getElementById("loading");

async function fetchUnresolvedTickets() {
    loading.style.display = "block";
    //show loading indicator initially
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("Failed to fetch customers.");
        }
        //error message if fetch fails

        const customer = await response.json();
        console.log(response);
        //task 2 (above): fetch tickets using async/await and handle errors

        customer.forEach(ticket => {
            const ticketItem = document.createElement('li');
            ticketItem.innerHTML = 
            `<p><b>ID:</b> ${ticket.id}</p>
            <p><b>Name:</b> ${ticket.userId}</p>
            <p><b>Issue:</b> ${ticket.title}</p>
            <p><b>Details:</b> ${ticket.body}</p>
            <br>`;
            customerTickets.appendChild(ticketItem);
        });
        //formatting inside the html for organization
        
    } catch (error) {
        errorMessage.textContent = error.message;
        console.error(`Error fetching tickets: ${error}`);
    //task 3 (above): for each customer ticket, display details

    } finally {
        loading.style.display = "none"; //hide loading indicator even if error
    }
    //task 4 (above): use finally to ensure cleanup
}

fetchUnresolvedTickets();
//call the function for anything to show up
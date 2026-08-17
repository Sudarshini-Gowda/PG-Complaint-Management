const form = document.getElementById("complaintForm");
const message = document.getElementById("message");
const complaintList = document.getElementById("complaintList");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const complaint = {
        name: document.getElementById("name").value,
        room: document.getElementById("room").value,
        contact: document.getElementById("contact").value,
        category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        priority: document.getElementById("priority").value,
        additional: document.getElementById("additional").value
    };

    const response = await fetch("/complaints", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(complaint)
    });

    const result = await response.json();

    message.textContent = result.message;

    form.reset();

    loadComplaints();
});


async function loadComplaints() {

    const response = await fetch("/complaints");

    const complaints = await response.json();

    complaintList.innerHTML = "";

    complaints.forEach(function(complaint) {

        const div = document.createElement("div");

        div.innerHTML = `
            <hr>

            <p><b>Name:</b> ${complaint.name}</p>

            <p><b>Room:</b> ${complaint.room}</p>

            <p><b>Contact:</b> ${complaint.contact}</p>

            <p><b>Category:</b> ${complaint.category}</p>

            <p><b>Description:</b> ${complaint.description}</p>

            <p><b>Priority:</b> ${complaint.priority}</p>

            <p><b>Additional:</b> ${complaint.additional}</p>
        `;

        complaintList.appendChild(div);
    });
}


loadComplaints();
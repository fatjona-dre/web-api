document.getElementById('complaint-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const response = await fetch('http://localhost:5000/api/complaints', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description })
    });

    const data = await response.json();
    alert('Ankesa është dërguar me sukses!');
    fetchComplaints();
});

async function fetchComplaints() {
    const response = await fetch('http://localhost:5000/api/complaints');
    const complaints = await response.json();
    const complaintList = document.getElementById('complaint-list');
    complaintList.innerHTML = '';

    complaints.forEach(complaint => {
        const li = document.createElement('li');
        li.textContent = `${complaint.title}: ${complaint.description} (Statusi: ${complaint.status})`;
        complaintList.appendChild(li);
    });
}

fetchComplaints();

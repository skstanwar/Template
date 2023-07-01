const fetchData =async()=>{
    const username = document.getElementById('username').value;
    const response = await fetch('/api/leetcode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username
        })
    });
    const data = await response.json();
    document.body.innerText= JSON.stringify(data);

}

const btn = document.getElementById('submitbtn');
btn.addEventListener('click', fetchData);
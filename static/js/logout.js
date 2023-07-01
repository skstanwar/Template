const logout=  document.getElementById('logout');
const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Referer': 'http://localhost:3000'
        },
        body: JSON.stringify({
            ok: true
        }),
    })
    const result = await response.json();
    console.log(result);}
    // window.location.reload();

logout.addEventListener('click',logoutHandler);
    async function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (showPosition, error)=>{
            if(error){
                console.log(error);
            }
            else {
                // console.log(showPosition.coords.latitude);
                // console.log(showPosition.coords.longitude);
                const response = await fetch('/api/weather', {
                    method: 'POST',
                    headers: {

                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        lat: showPosition.coords.latitude,
                        lon: showPosition.coords.longitude  
                    })

                })
                const data = await response.json();
                document.body.innerText= JSON.stringify(data);
                console.log(data);
            }
        });
      } else {
        alert("Please allow location access");
      }
    }
    
getLocation();

import { client } from 'https://unpkg.com/@passwordless-id/webauthn'
const btn = document.getElementById('Register');
async function Rgs(){
 
      const response = await fetch('/api/challange', { method: 'GET' });
      const challenge = await response.json();
      console.log(challenge.challange);

      const username= btn.value;
      const registration = await client.register(username, challenge.challange, {
        "authenticatorType": "auto",
        "userVerification": "required",
        "timeout": 60000,
        "attestation": false,
        "debug": false
      })
      console.log(registration);
     try{ 
      const response2 = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          registration:registration
        })
       
        
      })
      window.location.reload();
      console.log(response2);}
      catch(err){
        alert("Auth is Failed!");
      }

}
export { Rgs};

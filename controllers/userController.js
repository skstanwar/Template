import { server } from '@passwordless-id/webauthn' 

const challange = async (req, res) => {
     const  challange = "a7c61ef9-dc23-4806-b486-2428938a547e"
     console.log(challange);
     res.json({challange})
}



const register = async (req, res) => {
    const data= req.body;
    console.log(data.registration);
    const expected = {
        challenge: "a7c61ef9-dc23-4806-b486-2428938a547e",
        origin: "http://localhost:3000",
    }
    try{
        const registrationParsed = await server.verifyRegistration(data.registration, expected)
        console.log(registrationParsed);
        req.session.IsAuth=true;
        res.redirect('/');
    }
    catch(err){
        console.log(err);
    }


}
export { challange , register };


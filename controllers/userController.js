import { server } from '@passwordless-id/webauthn' 
// import nodemailer from 'nodemailer';

// const tranporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     auth: {
//       user: 
//       pass:
//     },
//   });

const challange = async (req, res) => {
     const  challange = "a7c61ef9-dc23-4806-b486-2428938a547e"
    //  console.log(challange);
     res.json({challange})
}
const register = async (req, res) => {
    const data= req.body;
    // console.log(data.registration);
    const expected = {
        challenge: "a7c61ef9-dc23-4806-b486-2428938a547e",
        origin: "http://localhost:3000",
    }
    try{
        const registrationParsed = await server.verifyRegistration(data.registration, expected)
        // console.log(registrationParsed);
        req.session.IsAuth=true;
        res.redirect(307, '/');




    }
    catch(err){
        console.log(err);
    }


}
const logout = async (req, res) => {
    req.session.IsAuth=false;
    res.redirect('/register');
}

export { challange , register ,logout};


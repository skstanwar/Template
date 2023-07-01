
const WeatherFetch = async(req , res)=>{
    const {lat , lon}= req.body;
        // const lat=26.902528;
        // const lon=75.787270;
        // process.env.WEATHER_API
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API}`);
    const data = await response.json();
    console.log(data);
    res.json({data});

}

const leetcode = async(req, res) => {
    let user = req.body.username;
    // console.log(user);  
    const query = `
  query getUserProfile($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      contributions {
        points
      }
      profile {
        reputation
        ranking
      }
      submissionCalendar
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
        totalSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
`;
const response= await fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Referer': 'https://leetcode.com'
        }, 
        body: JSON.stringify({query: query, variables: {username: user}}),
    
    })
    const result = await response.json();
    res.json({result})

    
}

export {WeatherFetch , leetcode};
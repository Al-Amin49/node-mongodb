const  express = require('express')
const app = express();

//with arrow function
// const rootCallback=(req, res)=> {
//     res.send('Thank you for calling me');
// }
// app.get('/', rootCallback )

app.get('/', (req, res)=> {
    res.send('Thank you for Invite me');
})

app.listen(3000, ()=> console.log('Listening on port 3000'));
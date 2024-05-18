import express from 'express';

const app = express();


const posts={};


app.get('/posts', (req, res) => {
    res.send(posts);
});



app.post('/posts', (req, res) => {});





app.listen(3000, () => {
  console.log('Server is running on port 3000');
})
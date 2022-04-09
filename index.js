import express from 'express'

const app = express();
const PORT = 8080;

app.get('/', (req, res) => 
    res.send(`Node is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);
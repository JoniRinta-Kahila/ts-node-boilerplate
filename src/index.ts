import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({ origin: '*' }));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

export default app;

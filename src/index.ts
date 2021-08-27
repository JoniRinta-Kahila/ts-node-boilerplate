import express from 'express';

const app = express();

export const test1 = (): boolean => {
  const val = true;
  return val;
};

export const test2 = () => false;

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

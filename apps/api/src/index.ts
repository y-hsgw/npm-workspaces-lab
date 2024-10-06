import express, { type Request, type Response } from 'express';

const app = express();
const PORT = 8080;

app.get('/', (request: Request, response: Response) => {
  response.json({ text: `Hello World! I'm ${process.env.npm_package_name}` });
});

app
  .listen(PORT, () => {
    console.log('Server running at PORT: ', PORT);
  })
  .on('error', (error) => {
    throw new Error(error.message);
  });

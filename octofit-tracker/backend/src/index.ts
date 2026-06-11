import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit-tracker';
const port = Number(process.env.PORT ?? 8000);

mongoose
  .connect(mongoUri)
  .then(() => console.log('Connected to MongoDB on', mongoUri))
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', port });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend listening on http://0.0.0.0:${port}`);
});


import express from 'express';
import renderApi from '@api/render-api';

const app = express();
const PORT = process.env.PORT || 3000;

renderApi.auth('rnd_jwbOVcyq3FZhOVj6Taiv08V5Mz36');

app.get('/', async (req, res) => {
  try {
    const { data } = await renderApi.listServices({ includePreviews: 'true', limit: '20' });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data from Render API');
  }
});

// הפעלת השרת
app.listen(PORT, () => {
  console.log(` 🦜 Server is running on port ${PORT}`);
});
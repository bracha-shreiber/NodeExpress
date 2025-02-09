import express from 'express';
import axios from 'axios'; // השתמש ב-import במקום require

const app = express();
const PORT = process.env.PORT || 3000;

// Replace with your actual Render API token
const RENDER_API_TOKEN = "rnd_jwbOVcyq3FZhOVj6Taiv08V5Mz36";

// Endpoint to get installed applications
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Authorization': `Bearer ${RENDER_API_TOKEN}`,
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching applications' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
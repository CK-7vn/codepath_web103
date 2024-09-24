import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import languages from './data/languages.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views', 'index.html'));
});

app.get('/language/:id', (req, res) => {
    const language = languages.find(lang => lang.id === parseInt(req.params.id));
    if (language) {
        res.sendFile(path.join(__dirname, './public/views', 'language.html'));
    } else {
        res.status(404).send('Language not found');
    }
});


app.get('/api/languages', (req, res) => {
    res.json(languages);
});

app.get('/api/language/:id', (req, res) => {
    const language = languages.find(lang => lang.id === parseInt(req.params.id));
    if (language) {
        res.json(language);
    } else {
        res.status(404).json({ error: 'Language not found' });
    }
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, './public/views', '404.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up static directory to serve pages
app.use(express.static('public'));

// For the root route, return the index page
app.get('/', function(req, res) {
		res.sendFile(path.join('/public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

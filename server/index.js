const app = require('./app');
console.log('APP ', app)
// Start the server
const port = process.env.SPORT || 5000;
app.listen(port);
console.log(`Server listening at ${port}`);
// refactored code for easier test and feature scale

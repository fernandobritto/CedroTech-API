import app from './app'
app.listen(process.env.SERVER_PORT || 3000, () => console.log('Server OK - 200'))

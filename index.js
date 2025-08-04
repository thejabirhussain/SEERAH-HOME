const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/book', (req, res) => {
    res.render('book');
});
app.get('/aboutus', (req, res) => {
    res.render('aboutus');
});

app.get('/404', (req, res) => {
    res.render('404');
});

app.get('/about-us', (req, res) => {
    res.render('about-us');
});

app.get('/contact-us', (req, res) => {
    res.render('contact-us');
});

app.get('/courses', (req, res) => {
    res.render('courses');
});

app.get('/single-course', (req, res) => {
    res.render('single-course');
});

app.get('/index', (req, res) => {
    res.render('index');
});
app.get('/seminar-single', (req, res) => {
    res.render('seminar-single');
});

app.get('/zera', (req, res) => {
    res.render('zera');
});

app.get('/log-in', (req, res) => {
    res.render('log-in');
});
app.get('/seminars', (req, res) => {
    res.render('seminars');
});

app.get('/reset-password', (req, res) => {
    res.render('reset-password');
});

app.get('/sign-up', (req, res) => {
    res.render('sign-up');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
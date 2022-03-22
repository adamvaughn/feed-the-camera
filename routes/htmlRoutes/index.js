const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/home.html'));
});
  
router.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/blog.html'));
});

router.get('/editor', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/editor.html'));
});
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/home.html'));
  });

module.exports = router;
const router = require('express').Router();
const blogRoutes = require('../apiRoutes/blogRoutes');
const editorRoutes = require('../apiRoutes/editorRoutes');
const firebaseRoutes = require('../apiRoutes/firebaseRoutes');
const homeRoutes = require('../apiRoutes/homeRoutes');
// new stuff
const userRoutes = require('../apiRoutes/userRoutes');
const apiRoutes = require('./api');

router.use(blogRoutes);
router.use(editorRoutes);
router.use(firebaseRoutes);
router.use(homeRoutes);
// new stuff
router.use('users', userRoutes);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
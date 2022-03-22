const router = require('express').Router();
const blogRoutes = require('../apiRoutes/blogRoutes');
const editorRoutes = require('../apiRoutes/editorRoutes');
const firebaseRoutes = require('../apiRoutes/firebaseRoutes');
const homeRoutes = require('../apiRoutes/homeRoutes');

router.use(blogRoutes);
router.use(editorRoutes);
router.use(firebaseRoutes);
router.use(homeRoutes);

module.exports = router;
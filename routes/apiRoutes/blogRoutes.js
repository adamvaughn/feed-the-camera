const router = require('express').Router();
const { filterByQuery } = require('../../lib/blogPosts');
const { blogPosts } = require('../../data/blogPosts');


// TODO:  need more query and post options //

router.get('/blogPosts', (req, res) => {
    let results = blogPosts;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });

router.post('/blogPosts', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = blogPosts.length.toString();
  
    if (!validatePost(req.body)) {
      res.status(400).send('The post is not properly formatted.');
    } else {
      const newPost = createNewPost(req.body, blogPosts);
      res.json(newPost);
    }
  });

module.exports = router;

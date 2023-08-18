const router = require('express').Router();
const postModel = require('./schemas/post');

router.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.send('API IS RUNNING.......................');
});

router.post('/createPost', async (req, res) => {
  try {
    const newItem = new postModel({
      title: req.body.title,
      logo: req.body.logo || null,
      imgurl: req.body.imgurl || null,
      feeds: req.body.feeds,
      num: req.body.num,
      topic: req.body.topic,
    });
    const saveItem = await newItem.save();
    res.send(newItem);
  } catch (err) {
    res.json(err);
  }
});

router.get('/getPosts', async (req, res) => {
  try {
    const allItems = await postModel.find({});
    res.status(200).json(allItems);
  } catch (err) {
    res.json(err);
  }
});

// New route to get a single post by num
router.get('/getPosts/:num', async (req, res) => {
  try {
    const num = req.params.num;
    const post = await postModel.findOne({ num: num });
    
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;

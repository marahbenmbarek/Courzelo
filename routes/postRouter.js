const router = require('express').Router()
const postCtrl = require('../controllers/postCtrl')
const auth = require('../middleware/auth')

router.post('/',auth, postCtrl.addPost )
router.put('/:id' ,auth, postCtrl.updatePost )
router.delete('/:id' , auth,postCtrl.deletPost )
router.put('/:id/like' , auth,postCtrl.likedislikePost )
router.get('/:id' , auth,postCtrl.getPost )
router.get('/timeline/all' ,auth, postCtrl.getAllPosts )
router.get('/postsbyuser', auth, postCtrl.getAllPostByUser);

module.exports = router
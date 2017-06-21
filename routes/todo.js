// routes/todo.js


const controllers = require('../controllers/todo')

router.get('/todo/tasks', controllers.all)
router.get('/todo/tasks/:status', controllers.findByStatus)
router.get('/todo/tasks/:id', controllers.find)
router.post('/todo/tasks', controllers.create)
router.put('/todo/tasks/:id', controllers.update)
router.delete('/todo/tasks/:id', controllers.remove)
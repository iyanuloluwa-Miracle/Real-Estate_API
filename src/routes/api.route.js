const router = require('express').Router();
const authController = require('../controllers/authController')
const propertyController = require('../controllers/propertyController')

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

//Router for User authentication
router.post('/register', authController.register);
// Login a user
router.post('/login', authController.login);
// Logout a user
router.post('/logout', authController.logout);

// Router for PropertySchema
router.get('/properties', propertyController.getAllProperties);
router.post('/properties', propertyController.createProperty);
router.get('/properties/:id', propertyController.getPropertyById);
router.put('/properties/:id', propertyController.updateProperty);
router.delete('/properties/:id', propertyController.deleteProperty);
router.get('/search', propertyController.searchProperties);

module.exports = router;

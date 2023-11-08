require("../models/database");
const Property = require('../models/Property')


// GET /api/properties - Get all properties
exports.getAllProperties = async (req, res) => {
    try {
      const properties = await Property.find();
      res.json(properties);
    } catch (error) {
      res.status(500).json({ error: 'Something went Wrong!' });
    }
  };
  
  // POST /api/properties - Create a new property
exports.createProperty = async (req, res) => {
    try {
      const property = new Property(req.body);
      await property.save();
      res.json(property);
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
};
  
  // GET /api/properties/:id - Get a specific property by ID
exports.getPropertyById = async (req, res) => {
    try {
      const property = await Property.findById(req.params.id);
      if (!property) {
        return res.status(404).json({ error: 'Property not found' });
      }
      res.json(property);
    } catch (error) {
      res.status(500).json({ error: 'Something went Wrong!' });
    }
  };
  
  // PUT /api/properties/:id - Update a property
exports.updateProperty = async (req, res) => {
    try {
      const property = await Property.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!property) {
        return res.status(404).json({ error: 'Property not found' });
      }
      res.json(property);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
};
  
  // DELETE /api/properties/:id - Delete a property
exports.deleteProperty = async (req, res) => {
    try {
      const property = await Property.findByIdAndRemove(req.params.id);
      if (!property) {
        return res.status(404).json({ error: 'Property not found' });
      }
      res.json({ message: 'Property deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  // GET /api/properties/search - Search for properties
  exports.searchProperties = async (req, res) => {
    try {
      const { location, Price, description, title } = req.query;
  
      // Build the search query based on the provided parameters
      const query = {};
  
      if (location) {
        query.location = { $regex: location, $options: 'i' };
      }
      if (title) {
        query.title = { $regex: title, $options: 'i' };
      }
      if (description) {
        query.description = { $regex: description, $options: 'i' };
      }
      
    if (Price) {
        query.price = { $lte: Price };
      }
  
      const properties = await Property.find(query);
      res.json(properties);
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
  };
  
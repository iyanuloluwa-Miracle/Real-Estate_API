const propertyController = require('../src/controllers/propertyController'); // Import your property controller
const Property = require('../models/Property'); // Import your Property model

jest.mock('../models/Property', () => ({
  find: jest.fn(),
  findById: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  findByIdAndRemove: jest.fn(),
}));

describe('Property Controller Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock function calls between tests
  });

  it('should get all properties', async () => {
    const mockProperties = [{ _id: '1', name: 'Property 1' }, { _id: '2', name: 'Property 2' }];
    Property.find.mockResolvedValue(mockProperties);

    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    await propertyController.getAllProperties(req, res);

    expect(Property.find).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(mockProperties);
  });

  // Similarly, write tests for other functions like createProperty, getPropertyById, updateProperty, deleteProperty, and searchProperties
});

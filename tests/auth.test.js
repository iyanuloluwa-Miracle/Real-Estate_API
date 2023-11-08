const Property = require('../src/models/Property'); // Ensure the correct path

const { getAllProperties } = require('../src/controllers/propertyController'); // Replace 'yourControllerFileName' with the actual filename

describe('getAllProperties function', () => {
  let mockRequest;
  let mockResponse;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get all properties', async () => {
    // Mock the Property.find method to resolve with a sample array of properties
    Property.find = jest.fn().mockResolvedValue(['property1', 'property2']);

    await getAllProperties(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith(['property1', 'property2']);
  });

  it('should handle errors when getting all properties', async () => {
    // Mock the Property.find method to reject with an error
    Property.find = jest.fn().mockRejectedValue(new Error('Database error'));

    await getAllProperties(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Something went Wrong!' });
  });
});


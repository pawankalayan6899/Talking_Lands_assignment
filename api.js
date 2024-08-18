import axios from 'axios';

export const getSpatialData = async () => {
  try {
    const response = await axios.get('YOUR_SPATIAL_API_ENDPOINT');
    return response.data;
  } catch (error) {
    console.error('Error fetching spatial data:', error);
    return { points: [], polygons: [] };
  }
};

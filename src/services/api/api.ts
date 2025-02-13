import axios from 'axios';
import { Image } from '../models/Image';

const API_URL = 'https://fakerapi.it/api/v1/images?_width=380';

export const fetchImages = async (): Promise<Image[]> => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

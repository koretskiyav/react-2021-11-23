import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  return uuidv4();
};

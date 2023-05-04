import { cat } from "../models/cat.interface";

export const create = (data: cat) => {
  if (data.name && data.age >= 0) {
    return true;
  }
  return false;
};



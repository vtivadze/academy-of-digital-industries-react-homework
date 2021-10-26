import axios from 'axios';
import { logGroup } from "../helpers/logger";

export const getUserList = async () => {
  try {
    const result = await axios.get('/users');
    console.log(result.data);
  }
  catch(error) {
    logGroup(error, "getUserList");
  }
};
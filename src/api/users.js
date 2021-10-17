import { User } from "../modules";
import { users } from "../data";

export const Users = users.map(user => new User(user));
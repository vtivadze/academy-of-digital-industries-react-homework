import { User } from '../models';
import { users as usersData } from '../data';

export const users = usersData.map(user => new User(user));

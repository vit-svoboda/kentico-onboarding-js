
import { Map } from 'immutable';
import uuid from 'uuid';

export default {
  items: Map.of(
    uuid(), 'Buy milk',
    uuid(), 'Master React',
    uuid(), 'Learn Redux',
    uuid(), 'Help making Draft awesome',
  ),
};

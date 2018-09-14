import API from '../Constants/api';
import {App} from '../Constants/actions'

export function listPhotos() {
  return {
    type: App.Photo.List.Request,
    payload: {
      request: {
        url: API.Photos
      }
    }
  };
}

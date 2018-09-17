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

export function getPhoto(id: string) {
    return {
        type: App.Photo.Detail.Request,
        payload: {
            request: {
                url: API.Detail.replace(':id', id)
            }
        }
    };
}

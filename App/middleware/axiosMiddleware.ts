import axios from 'axios';
import {SERVER_URL} from "../Constants/api";
const middleware = require('redux-axios-middleware');


export default middleware.multiClientMiddleware({
    default: {
        client: axios.create({
                  baseURL:  "https://jsonplaceholder.typicode.com",
                  responseType: 'json'
              }),
    }
});

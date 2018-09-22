import axios from 'axios';
const middleware = require('redux-axios-middleware');


export default middleware.multiClientMiddleware({
    default: {
        client: axios.create({
              baseURL:  "https://jsonplaceholder.typicode.com",
              responseType: 'json'
          }),
    }
});

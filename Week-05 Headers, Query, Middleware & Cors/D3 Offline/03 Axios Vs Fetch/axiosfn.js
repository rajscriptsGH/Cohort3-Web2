const axios = require('axios');

//send request url
//send body
//send headers
async function main() {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1',
    const response = await axios.get('https://httpdump.app/inspect/434d297d-97df-4676-9d9e-4dcedddfd726',
        {
            headers: {
                "Authorization": "reader 123",
            }
        }
    )
    // const data = await response.json();                   //this don't need to be done with axios, they do it internally
    console.log(response.data);

}
main();
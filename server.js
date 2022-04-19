const express = require('express');
const app = express();
const axios = require('axios');


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.get('/population', (req, res) => {
    axios.get('https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-049')
        .then(d => {
            let data = d.data.result.records;
            return res.send({ data: data });
        })
        .catch(e => {
            console.log(e);
        })

})


app.listen(3002, () => {
    console.log('Server is running on port 3002');
})
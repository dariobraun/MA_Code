const express = require('express');
const Layout = require('@podium/layout');

const layout = new Layout({
    name: 'myLayout',
    pathname: '/',
});
const podlet = layout.client.register({
    name: 'myPodlet',
    uri: 'http://localhost:7100/manifest.json',
});

const app = express();
app.use(layout.middleware());
app.get('/', async (req, res) => {
    const content = await podlet.fetch();
    res.send(`
        <html><body><h1>Podium Example</h1><p>${content}</p></body></html>
    `);
});
app.listen(7000);
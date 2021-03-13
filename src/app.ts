import createServer from 'server';

const startServer = () => {
    const app = createServer();
    const port: number = parseInt(<string>process.env.PORT, 10) || 5500;

    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    })
}

startServer();
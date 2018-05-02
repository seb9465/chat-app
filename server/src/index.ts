import app from './app';

const port: number|string = process.env.PORT || 3000;

app.listen(port, (err: string) => {
    if (err) {
        return console.log(err);
    }
    return console.log('server is listening on port ' + port);
});

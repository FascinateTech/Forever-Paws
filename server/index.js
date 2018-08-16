import app from './app/app';

const Console = console;

const port = process.env.PORT || 3000;
Console.log(process.env);
app.listen(port, () => Console.log('listening on port: ', port));

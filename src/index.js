import app from './app.js';

async function main(){
    const PORT = process.env.PORT;
    app.listen(PORT);
    console.log('Server listening in PORT: ', PORT);
}

main();
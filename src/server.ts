import mongoose from 'mongoose';

import app from './app';
import config from './config';

async function databaseConnection() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log('Database is connected successfully.');
        app.listen(config.port, () => {
            console.log(`Boobuddy server is listening on port ${config.port}`)
          })
          app.get("/", (req, res) => {
            res.send("This project is running");
          });
    }catch(error){
        console.log(error);
    }
}

databaseConnection();
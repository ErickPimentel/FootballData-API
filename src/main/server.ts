import express from 'express';
import dotenv from 'dotenv';
import router from '../routes/router';

dotenv.config();

class App {
    public expressApp: express.Application;
    private static instance: App;

    private constructor() {
        this.expressApp = express();

        this.setupApp();

        this.expressApp.listen(8080);
        console.info('Server running on port 8080');
    }

    public static getInstance(): App {
        if (!App.instance) {
            App.instance = new App();
        }

        return App.instance;
    }

    private setupApp() {
        this.routes();
    }

    private routes(): void {
        this.expressApp.use(router);
    }
}

export default App.getInstance().expressApp;

import express, { Application } from "express";

export default class Server {
    app: Application;

    constructor(private readonly port: 80 | 8080 | 3000) {
        this.app = express();

        this.app.use(express.json());

        this.app.set("view engine", "ejs");
        this.app.set("views", "./views");
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`);
        });
    }

    registerRouter(path: string, router: express.Router) {
        this.app.use(path, router);
    }
}

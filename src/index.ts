import Server from "./core/Server";
import DeleteRoute from "./routes/DeleteRoute";
import DownloadableRoute from "./routes/DownloadableRoute";
import IndexRoute from "./routes/IndexRoute";
import SubmitRoute from "./routes/SubmitRoute";

const server = new Server(80);

server.registerRouter("/", IndexRoute);
server.registerRouter("/submit", SubmitRoute);
server.registerRouter("/delete", DeleteRoute);
server.registerRouter("/downloadable", DownloadableRoute);

server.start();

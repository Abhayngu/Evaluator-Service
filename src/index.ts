import express, { Express } from "express";
import apiRouter from "./routes/index";
import serverConfig from "./config/serverConfig";
import SampleWorker from "./workers/SampleWorker";
import bullBoardAdapter from "./config/bullBoardConfig";
import runPython from "./containers/runPythonDocker";

const app: Express = express();

app.use(express.json());
app.use("/api", apiRouter);
app.use("/ui", bullBoardAdapter.getRouter());

app.listen(serverConfig.PORT, async function () {
  console.log(`Server is running in port ${serverConfig.PORT}`);

  SampleWorker("SampleQueue");

  const code = `print(hello)`;
  runPython(code);
});

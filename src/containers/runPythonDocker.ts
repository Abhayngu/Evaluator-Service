import containerFactory from "./containerFactory";
import { PYTHON_IMAGE } from "../utils/constants";
export default async function runPython(code: string) {
  console.log("initializing a new python docker container");
  const pythonContainer = await containerFactory(PYTHON_IMAGE, [
    "python3",
    "-c",
    code,
    "stty -echo", // this flag disable the echoing of characters
  ]);

  // Booting the docker container
  await pythonContainer.start();
  console.log("Started the container");
  return pythonContainer;
}

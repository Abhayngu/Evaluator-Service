import Docker from "dockerode";

export default async function containerFactory(
  imageName: string,
  cmdExecutable: string[]
) {
  const docker = new Docker();
  const container = await docker.createContainer({
    Image: imageName,
    Cmd: cmdExecutable,
    AttachStdin: true, // to enable input streams
    AttachStdout: true, // to enable output streams
    AttachStderr: true, // to enable error streams
    Tty: false,
    OpenStdin: true, // Keep the input stream open even if there is no interaction
  });
  return container;
}

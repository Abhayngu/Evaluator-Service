import sampleQueue from "../queue/sampleQueue";

export default async function sampleQueueProducer(
  name: string,
  payload: Record<string, unknown>,
  priority: { priority: number }
) {
  console.log("Sample queue producer");
  await sampleQueue.add(name, payload, priority);
}

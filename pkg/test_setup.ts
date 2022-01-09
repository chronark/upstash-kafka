import { Kafka } from "./kafka.ts";
const url = Deno.env.get("UPSTASH_KAFKA_REST_URL");
if (!url) {
  throw new Error("Could not find url");
}
const username = Deno.env.get("UPSTASH_KAFKA_REST_USERNAME");
if (!username) {
  throw new Error("Could not find username");
}
const password = Deno.env.get("UPSTASH_KAFKA_REST_PASSWORD");
if (!password) {
  throw new Error("Could not find password");
}

export const kafka = new Kafka({
  url,
  username,
  password,
});

export enum Topic {
  GREEN = "green",
  BLUE = "blue",
  RED = "red",
}

export async function clearInstances(): Promise<void> {
  const a = kafka.admin();
  const existingConsumers = await a.consumers();
  await Promise.all(
    existingConsumers.flatMap((group) =>
      group.instances.map((instance) =>
        a.removeConsumerInstance(group.name, instance.name)
      )
    ),
  );
}

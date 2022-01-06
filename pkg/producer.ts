import { UpstashError } from "./error.ts";
import {
  ErrorResponse,
  ProduceOptions,
  ProduceRequest,
  ProduceResponse,
} from "./types.ts";

export class Producer {
  private readonly url: string;
  private readonly authorization: string;

  constructor(url: string, authoriztation: string) {
    this.url = url;
    this.authorization = authoriztation;
  }
  /**
   * Produce a single message to a single topic
   */
  public async produce<TMessage>(
    topic: string,
    message: TMessage,
    opts?: ProduceOptions,
  ): Promise<ProduceResponse> {
    const request: ProduceRequest = {
      topic,
      value: typeof message === "string" ? message : JSON.stringify(message),
      ...opts,
    };

    const res = await fetch(`${this.url}/produce`, {
      method: "POST",
      headers: {
        Authorization: this.authorization,
      },
      body: JSON.stringify(request),
    });
    if (!res.ok) {
      throw new UpstashError((await res.json()) as ErrorResponse);
    }
    const json = (await res.json()) as ProduceResponse[];
    return json[0];
  }

  /**
   * Produce multiple messages to different topics at the same time
   *
   * Each entry in the response array belongs to the request with the same order in the requests.
   */
  public async produceMany(
    requests: ProduceRequest[],
  ): Promise<ProduceResponse[]> {
    const res = await fetch(`${this.url}/produce`, {
      method: "POST",
      headers: {
        Authorization: this.authorization,
      },
      body: JSON.stringify(requests),
    });
    if (!res.ok) {
      throw new UpstashError((await res.json()) as ErrorResponse);
    }

    return (await res.json()) as ProduceResponse[];
  }
}

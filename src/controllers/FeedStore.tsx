import { makeObservable, observable } from "mobx";
import { SimplePool, Filter, Kind, Sub, Event } from "nostr-tools";

export class FeedStore {
  relays: string[] = [
    "wss://nostr.wine",
    "wss://nos.lol",
    "wss://nostr.actn.io",
  ];
  pool: SimplePool;
  sub: Sub;
  notes: string[] = [];

  constructor() {
    makeObservable(this, {
      notes: observable,
    });

    //todo: relays as input
    this.pool = new SimplePool();
    this.sub = this.pool.sub(this.relays, [
      {
        kinds: [Kind.Text],
        limit: 100,
      },
    ]);

    this.sub.on("event", (event: Event) => {
      console.log(event, event.tags);
      this.notes.push(event.content);
    });
  }
}

export const feedStore = new FeedStore();

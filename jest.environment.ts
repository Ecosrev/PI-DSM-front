import JestEnvironmentJSDOM16 from "jest-environment-jsdom-sixteen";

class CustomEnvironment extends JestEnvironmentJSDOM16 {
  async setup() {
    await super.setup();

    if (typeof global.ReadableStream === "undefined") {
      global.ReadableStream = class ReadableStream<R = any> {
        locked = false;

        constructor(
          underlyingSource?: UnderlyingSource<R>,
          strategy?: QueuingStrategy<R>
        ) {}

        getReader(): ReadableStreamDefaultReader<R> {
          return {
            read: () => Promise.resolve({ done: true, value: undefined }),
            releaseLock: () => {},
            cancel: () => Promise.resolve(),
            closed: Promise.resolve(),
          } as ReadableStreamDefaultReader<R>;
        }

        cancel(): Promise<void> {
          return Promise.resolve();
        }

        pipeThrough<T>(): ReadableStream<T> {
          throw new Error("Not implemented");
        }

        pipeTo(): Promise<void> {
          return Promise.resolve();
        }
      } as any;
    }
  }
}

export default CustomEnvironment;

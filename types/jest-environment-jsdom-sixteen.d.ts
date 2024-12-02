declare module "jest-environment-jsdom-sixteen" {
  import type { JestEnvironmentConfig } from "@jest/environment";
  import type { JestEnvironment } from "@jest/environment";

  class JestEnvironmentJSDOM16 extends JestEnvironment {
    constructor(config: JestEnvironmentConfig);
    setup(): Promise<void>;
    teardown(): Promise<void>;
    runScript(script: string): Promise<void>;
  }

  export = JestEnvironmentJSDOM16;
}

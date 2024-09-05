// smart-chat-model.d.ts

// inferred manually from the source at:
// https://github.com/brianpetro/jsbrains/blob/main/smart-chat-model/smart_chat_model.js
declare module 'smart-chat-model' {
  export class SmartChatModel {
    constructor(main: object, platform_key: string, model_config: object);

    complete(opts: object, render?: boolean): Promise<string | void>;
  }
}

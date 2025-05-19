declare module '../openai' {
  export const openai: {
    chat: {
      completions: {
        create: (params: any) => Promise<any>;
      };
    };
  };
} 
import { useChat as useChatAI } from 'ai/react';

export function useChat() {
  const { messages, input, handleInputChange, handleSubmit } = useChatAI({
    api: '/api/chat',
    initialMessages: [
      {
        id: 'frame1',
        role: 'system',
        content:
          'You are a master sommelier working in a Michelin-starred restaurant',
      },
      {
        id: 'frame2',
        role: 'system',
        content:
          'Pair the following dish with wine. Structure your answer in the following way. Pair with: [wine name].</n>Why: [reasoning] in a single sentence.',
      },
    ],
  });

  return { messages, input, handleInputChange, handleSubmit };
}

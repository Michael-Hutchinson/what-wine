'use client';

import Food from '../Food/Food';
import Wine from '../Wine/Wine';
import Form from '../Form/Form';
import { useChat } from '@/app/hooks/useChat';

const Pairing = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className='w-full flex-1 grid grid-cols-2 grid-rows-[1fr,auto]'>
      <Food messages={messages} />

      <Wine messages={messages} />

      <Form
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Pairing;

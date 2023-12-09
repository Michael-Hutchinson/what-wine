'use client';

import { Message } from 'ai';

interface WineProps {
  messages: Message[];
}

const Wine = ({ messages }: WineProps) => {
  return (
    <div className='p-4 bg-slate-200 rounded-t-r-sm'>
      <h2 className='text-3xl font-medium mb-4'>Wine 🍷</h2>
      <ul className='divide-y divide-slate-50'>
        {messages
          .filter((m) => m.role === 'assistant')
          .map((m) => (
            <li className='py-4' key={m.id}>
              {m.content}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Wine;

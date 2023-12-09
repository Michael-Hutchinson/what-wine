'use client';

import { Message } from 'ai';

interface FoodProps {
  messages: Message[];
}

const Food = ({ messages }: FoodProps) => (
  <div className='p-4 bg-gray-100 rounded-t-l-sm'>
    <h2 className='text-3xl font-medium mb-4'>Food 🍽</h2>
    <ul className='divide-y-2'>
      {messages
        .filter((m) => m.role === 'user')
        .map((m) => (
          <li className='py-4' key={m.id}>
            {m.content}
          </li>
        ))}
    </ul>
  </div>
);

export default Food;

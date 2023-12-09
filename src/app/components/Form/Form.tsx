'use client';

import { Button, TextArea } from '@radix-ui/themes';

interface FormProps {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ input, handleInputChange, handleSubmit }: FormProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className='col-span-2 p-4 bg-slate-900 rounded-b-sm'
    >
      <div className='max-w-sm'>
        <TextArea
          value={input}
          onChange={handleInputChange}
          placeholder='What are you eating?'
        />
        <Button className='mt-4 bg-white text-slate-900' type='submit'>
          Pair 🍷
        </Button>
      </div>
    </form>
  );
};

export default Form;

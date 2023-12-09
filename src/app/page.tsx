import Image from 'next/image';
import Pairing from './components/Pairing/Pairing';
import { Heading } from '@radix-ui/themes';

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-between max-w-7xl mx-auto px-20 py-10 gap-2'>
      <Heading as='h1'>Find Wine to pair with your food</Heading>
      <Pairing />
    </main>
  );
}

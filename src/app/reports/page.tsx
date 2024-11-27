import Tabs from '@/components/Tabs';
import { Roboto, Montserrat } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })
export default function Home() {
    return (
        <div className="mt-32">
            <h1
                className={`text-center text-white text-3xl font-semibold tracking-widest font-mono ${roboto.className}`}
            >
                Blogs
            </h1>
            <Tabs />
        </div>
    );
}
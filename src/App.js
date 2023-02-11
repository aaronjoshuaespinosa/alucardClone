import { Footer, Hero, History, Tokenomics, Util } from './components/index';
import './index.css';

function App() {
  return (
    <>
    <img className='fixed w-auto lg:w-full h-[120vh] lg:h-auto brightness-[45%] object-cover object-left-[100px]' src='https://ik.imagekit.io/xzgmktvzg/b3.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676113248784' />
      <div>
        <Hero />
        <Util />
        <History />
        <Tokenomics />
        <Footer />
      </div>
    </>
  );
}

export default App;

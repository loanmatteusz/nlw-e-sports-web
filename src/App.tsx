import { MagnifyingGlassPlus } from 'phosphor-react';

import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg';

const App: React.FC = () => {
  return <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
    <img src={logoImg} alt="" />
    <h1 className='text-6xl text-white font-black mt-20'>
      Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.
    </h1>
    <div className="grid grid-cols-6 gap-6 mt-16">
      <a href="" className='relative rounded-lg overflow-hidden'>
        <img src="/lol.png" alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">League of Legends</strong>
          <span className="text-zinc-300 text-sm block mt-1">3 anúncios</span>
        </div>
      </a>
      <a href="" className='relative rounded-lg overflow-hidden'>
        <img src="/apex.png" alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">League of Legends</strong>
          <span className="text-zinc-300 text-sm block mt-1">3 anúncios</span>
        </div>
      </a>
      <a href="" className='relative rounded-lg overflow-hidden'>
        <img src="/csgo.png" alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">League of Legends</strong>
          <span className="text-zinc-300 text-sm block mt-1">3 anúncios</span>
        </div>
      </a>
      <a href="" className='relative rounded-lg overflow-hidden'>
        <img src="/dota2.png" alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">League of Legends</strong>
          <span className="text-zinc-300 text-sm block mt-1">3 anúncios</span>
        </div>
      </a>
      <a href="" className='relative rounded-lg overflow-hidden'>
        <img src="/fortnite.png" alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">League of Legends</strong>
          <span className="text-zinc-300 text-sm block mt-1">3 anúncios</span>
        </div>
      </a>
      <a href="" className='relative rounded-lg overflow-hidden'>
        <img src="/warcraft.png" alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">League of Legends</strong>
          <span className="text-zinc-300 text-sm block mt-1">3 anúncios</span>
        </div>
      </a>
    </div>
    <div className="mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
      <div className="flex items-center justify-between bg-[#2A2634] px-8 py-6">
        <div>
          <strong className="text-2xl text-white font-black block">Não encontrou o seu duo?</strong>
          <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
        </div>
        <button className="px-4 py-3 bg-violet-500 text-white rounded-md hover:bg-violet-600 flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </button>
      </div>
    </div>
  </div>
}

export { App }

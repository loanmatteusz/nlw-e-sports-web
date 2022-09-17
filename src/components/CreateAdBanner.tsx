import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

const CreateAdBanner = () => {
  return (
    <div className="mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
      <div className="flex items-center justify-between bg-[#2A2634] px-8 py-6">
        <div>
          <strong className="text-2xl text-white font-black block">Não encontrou o seu duo?</strong>
          <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
        </div>
        <Dialog.Trigger className="px-4 py-3 bg-violet-500 text-white rounded-md hover:bg-violet-600 flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}

export { CreateAdBanner }
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent bg-opacity-70 z-50 pt-4 px-14 flex justify-between items-center">
      <div className="text-[1rem] font-bold">Mary Mendes</div>
      <nav className="space-x-10 text-xs">
        <a href="#inicio" className="hover:underline">
          INÍCIO
        </a>
        <a href="#sobre" className="hover:underline">
          SOBRE
        </a>
        <a href="#servicos" className="hover:underline">
          SERVIÇOS
        </a>
        <a href="#contato" className="hover:underline">
          CONTATO
        </a>
      </nav>
    </header>
  );
}

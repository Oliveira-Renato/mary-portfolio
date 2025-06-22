export default function Works() {
  return (
    <section id="servicos" className="min-h-screen p-10 bg-gray-800">
      <h2 className="text-3xl font-bold mb-8">Serviços</h2>
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Fashion Films</h3>
          {/* Carousel de vídeos aqui */}
          <div className="bg-gray-700 h-64 flex items-center justify-center">[Carrossel Fashion Films]</div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Conteúdo Interativo</h3>
          {/* Carousel de vídeos aqui */}
          <div className="bg-gray-700 h-64 flex items-center justify-center">[Carrossel Interativo]</div>
        </div>
      </div>
    </section>
  );
}
export default function LandingPage() {

  return (
    <section id="home" className="relative bg-white overflow-hidden">
      <div className="bg-transparent">
        <div className="relative isolate px-6 pt-4 pb-8 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-4 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl py-12 pb-60 sm:py-20"> 
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Conoce más sobre nuestra solución.{' '}
                <a href="*/form" className="font-semibold text-indigo-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Pruébalo <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Educación Personalizada para más Peruanos <br />
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                ¿Buscas una ruta de estudio personalizada? ¿Los métodos tradicionales no se ajustan a ti? QoriYachay es la solución. Conoce más
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://github.com/JaciLucasEulogio/qori-yachay-frontend-"
                  target="_blank"
                  className="fixed bottom-6 right-6 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 text-xl font-bold text-white shadow-lg transition-transform animate-bounce z-50"
                >
                  Repositorio
                  <span className="ml-2 text-2xl">⬆️</span>
                </a>
              </div>
              <div className="flex justify-center mt-10">
                <div className="relative w-full max-w-[560px] aspect-video">
                  <h2 className="text-lg font-semibold mt-4">Tutorial: Cómo usar la plataforma</h2>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Ja1wSVNb9h8?si=6QbdTOCuSrcbAJNV"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <div className="relative w-full max-w-[560px] aspect-video">
                  <h2 className="text-lg font-semibold mt-4">Demo de nuestra solución</h2>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/5RzgeGeTYtk?si=dLTLO2_MG5DqHadI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

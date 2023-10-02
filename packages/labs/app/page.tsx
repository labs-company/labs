import Header from './header';

export default function HomePage() {
  return (
    <div className='bg-[#050407]'>
      <Header />
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='py-32 sm:py-48 lg:py-48'>
          <div className='text-center max-w-7xl mx-auto'>
            <h2 className='text-6xl flex justify-center items-center flex-wrap font-bold tracking-tight text-white sm:text-8xl font-inter w-full px-2'>
              <span className='block relative p-2'>Laburar.</span>
              <span className='block relative p-2'>Avanzar.</span>
              <span className='block relative p-2'>Brillar.</span>
            </h2>
            <p className='mt-6 text-xl text-[#888] p-0 lg:px-72'>
              Labs es una empresa líder en el desarrollo de páginas web que se dedica a transformar
              tus ideas en experiencias digitales excepcionales.
            </p>
            <div className='mt-14 flex items-center justify-center gap-x-8'>
              <a
                href='#'
                className='rounded-md bg-indigo-600 px-6 py-2.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-inter w-40 text-lg'
              >
                Servicios
              </a>
              <a href='#' className='text-lg leading-6 text-white font-inter'>
                Contactanos
              </a>
            </div>
          </div>
        </div>
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'
        ></div>
      </div>
    </div>
  );
}

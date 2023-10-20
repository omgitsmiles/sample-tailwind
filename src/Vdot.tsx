import React from 'react'

const Vdot = () => {
  return (
    <>
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 flex items-center justify-between p-6 lg:px-8">
              <span className="sr-only">Marathon Man</span>
              <img
                className="h-8 w-auto"
                src="https://www.svgrepo.com/show/158299/runner.svg"
                alt=""
              />
            </a>
            </div>
    <div className='mx-auto max-w-2xl py-32 sm:py-24 lg:py-48'>
        <div className='text-center'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            vDot
            </h1>
            <div className='mt-2 flex items-center justify-center gap-x-5'>
              <iframe src='https://vdoto2.com/calculator/embed' width='500' height='1000' ></iframe>
            </div>
        </div>
    </div>
    </>
  )
}

export default Vdot
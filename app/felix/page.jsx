'use client'
import React from 'react'
import Link from 'next/link'
import { BsInstagram, BsYoutube, BsLinkedin } from 'react-icons/bs';


const Felix = () => {
  return (
    <div className='sm:flex justify-center mb-8'>
      <div className='flex '>
        <div className="flex-initial max-w-md  bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
          <div className="bg-white p-3 rounded-xl dark:bg-slate-800">
            <div className="p-2 flex justify-center md:shrink-3 content-end">
              <img width={140} class=" p-1 rounded-full  shadow-lg md:h-full md:w-48" src="/assets/images/profile.jpg" alt="Modern building architecture" />
            </div>
            <div className=" flex justify-center uppercase tracking-wide text-2xl italic">
              <h2> Leandro Galdino Felix </h2>
            </div>
            <div className='flex p-2 justify-center space-x-4'>
              <div className='flex p-0.5 '>
                <Link href="https://www.linkedin.com/in/leandro-galdino-felix-880401161/">
                  <img width={50} className='flex p-0.5' src="/assets/icons/1.png" />
                </Link>
              </div>
              <div className='flex p-0.5 '>
                <Link href="https://www.youtube.com/channel/UCUuNfXl_M98_BAu-82HYsgg">
                  <img width={50} className='flex p-0.5' src="/assets/icons/3.png" />
                </Link>
              </div>
              <div className='flex p-0.5 '>
                <Link href="https://www.instagram.com/oleandrofelix/">
                  <img width={50} className='flex p-0.5' src="/assets/icons/2.png" />
                </Link>
              </div>
            </div>
            <div className='p-8'>
              <div className="uppercase tracking-wide text-lg text-blue-700 font-semibold">2º Semestre Engenharia de software</div>
              <p className='center-text p-2'>Faculdade Estácio</p>
              <div className="uppercase tracking-wide text-lg text-blue-700 font-semibold">Tecnico em Automação industrial </div>
              <p className='center-text p-2'>Etec. Júlio Mesquita</p>
              <div>
                <div className="uppercase tracking-wide text-lg text-blue-700 font-semibold">Curso Fullstack Igor Oliveira</div>
              </div>
            </div>
            <div className="flex justify-center text-center  p-4 tracking-wide text-lg text-black-500 font-semibold ">These are the main technologies in which I have experience to work on projects.
            </div>
            <div className='flex justify-center'>
              <ul className='bg-white-500 p-3 grid lg:grid-flow-col lg:grid-rows-2 lg:grid-cols-3 gap-8 '>
                <li className=' sm:flex justify-center'>
                  <div className='flex p-1.5 '>
                    <div className='center-text'>
                      <img width={50} className='flex p-0.5' src="/assets/images/3.png" />
                    </div>
                    <strong className='ml-3 pt-2' >HTML</strong>
                  </div>
                </li>
                <li>
                  <div className='flex p-1.5'>
                    <div className='center-text'>
                      <img width={50} className='flex p-0.5' src="/assets/images/2.png" />
                    </div>
                    <strong className='ml-3 pt-2'>Css3</strong>
                  </div>
                </li>
                <li>
                  <div className='flex p-1.5'>
                    <div className='center-text'>
                      <img width={50} className='flex p-0.5' src="/assets/images/4.png" />
                    </div>
                    <strong className='ml-3 pt-2'>Javascript</strong>
                  </div>
                </li>
                <li>
                  <div className='flex p-1.5'>
                    <div className='center-text'>
                      <img width={50} className='flex p-0.5' src="/assets/images/6.png" />
                    </div>
                    <strong className='ml-3 pt-2'>Node.js</strong>
                  </div>
                </li>
                <li>
                  <div className='flex p-1.5'>
                    <div className='center-text'>
                      <img width={50} className='flex p-0.5' src="/assets/images/7.png" />
                    </div>
                    <strong className='ml-3 pt-2'>React.js</strong>
                  </div>
                </li>
                <li>
                  <div className='flex p-1.5'>
                    <div className='center-text'>
                      <img width={50} className='flex p-0.5' src="/assets/images/5.png" />
                    </div>
                    <strong >MongoDB</strong>
                  </div>
                </li>
                <li>
                  <div className='flex p-1.5'>
                    <div className='center-text'>
                      <img width={50} className='flex p-0.5' src="/assets/images/1.png" />
                    </div>
                    <strong className='ml-3 pt-2'>Git</strong>
                  </div>
                </li>

              </ul>
            </div>
            <div className='p-3'>
              <div class="flex justify-center space-x-4">
                <Link href={"/store"}><p className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-blue-200 hover:text-slate-900">
                  My Store</p></Link>
                <Link href={"/project"}><p className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-blue-200 hover:text-slate-900">
                  This project </p></Link>
             
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='flex justify-center p-5 mb-5'>
        <Link href="/" >
          <button type="button" className="bg-blue-600 text-white text-sm leading-6 font-medium p-3 py-2 px-3 rounded-lg">
            Back !
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Felix
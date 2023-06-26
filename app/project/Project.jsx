import React from 'react'
import Link from 'next/link'

const Project = () => {
    return (
        <>
           

                <div className='p-2 mb-8 text-justify'>
                    <h1 className='flex text-2xl justify-center font-bold'>APP functionality</h1>
                    <h2 className='p-4'>This project is based on my hobby for reading, and in the interest of knowing which are the most interesting quotes from the users' readings.</h2>
                    <img src="/assets/images/prompt.png" alt="" />
                    <h3 className='p-4' > In the indicated arrow you can search for authors or users and their notes! </h3>
                    <img src="/assets/images/notes.png" alt="" />
                    <h3 className='p-4' > Right after the login made by Google authenticator, the user can already create his notes and check his notes on his own personal page.</h3>
                </div>
                <div>
                    <h1>This project uses next.js technology, google cloud platform and mongoDB.</h1>
                    <div className='flex p-5'>
                        <div className='center-text'>
                            <img width={50} className='flex p-0.5' src="/assets/icons/next.png" />
                        </div>
                        <strong className='ml-3 pt-2'>Next.js</strong>
                    </div>
                    <div className='flex p-1.5'>
                        <div className='center-text'>
                            <img width={60} className='flex p-0.5' src="/assets/icons/gcp.png" />
                        </div>
                        <strong className='ml-3 pt-2'>Google Cloud Plataform</strong>
                    </div>
                    <div className='flex p-1.5'>
                        <div className='center-text'>
                            <img width={60} className='flex p-0.5' src="/assets/images/5.png" />
                        </div>
                        <strong className='ml-3 pt-2'>Mongo DB.</strong>
                    </div>

                </div>

                <div className='flex justify-center mb-7 p-5 '>
                    <Link href="./felix" >
                        <button type="button" className="bg-blue-600 text-white text-sm leading-6 font-medium p-3 py-2 px-3 rounded-lg">
                            Back !
                        </button>
                    </Link>
                </div>
           
        </>
    )
}

export default Project
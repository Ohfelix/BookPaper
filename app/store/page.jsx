'use client'

import Link from 'next/link';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'


export default function Store() {
    return (
        <>


            <div className="w-full flex-center flex-col p-5 mb-5">
                <h1 className="head_text text-center">
                    Soon I will be back to
                    <br className="max-md:hidden" />
                    <span className="blue_gradient p-3"> activities with my store !</span>
                </h1>
                <p className='text-xl bold p-2 italic'> These are some products : </p>
                <br className="max-md:hidden mb-1" />
            </div>
            <Carousel >
                <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                        <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                            <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Lightweight Hooded shirt</h1>
                            <p class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Coat</p>
                        </div>
                        <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                            <img src="/assets/images/blusafrente.jpg" alt="" class="w-full h-61 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" />
                            <img src="/assets/images/blusacosta.jpg" alt="" class="hidden w-full h-53 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
                            <img src="/assets/images/hollister.png" alt="" class="hidden w-full h-53 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" />
                        </div>
                        <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                            <dt class="sr-only">Reviews</dt>
                            <dd class="text-blue-600 flex items-center dark:text-indigo-400">
                                <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
                                    <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>4.89 <span class="text-slate-400 font-normal">(128)</span></span>
                            </dd>
                            <dt class="sr-only">Location</dt>
                            <dd class="flex items-center">
                                <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
                                    <circle cx="1" cy="1" r="1" />
                                </svg>
                                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                                    <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                    <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                </svg>
                                <p className='text-xl '>
                                    R$ 400,00
                                </p>
                            </dd>
                        </dl>
                        <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                            <button type="button" class="bg-blue-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
                                <Link href={"https://wa.me/11951393052"}>
                                    Check availability
                                </Link>
                            </button>
                        </div>
                        <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                            Made from high-quality cotton, this top provides maximum comfort, allowing you to enjoy your adventures in style and freedom. Its modern cut and perfect fit ensure a contemporary and sophisticated look, while the fabric's softness provides a feeling of well-being throughout the day.
                        </p>
                    </div>
                </main>
                <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                        <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                            <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Invicta Marvel Punisher Men's Watch </h1>
                            <p class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400"> - 48mm, Gunmetal</p>
                        </div>
                        <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                            <img src="/assets/images/relogiomarvel.jpg" alt="" class="w-full h-61 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" />
                            <img src="/assets/images/marvelwatch.jpg" alt="" class="hidden w-full h-53 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" />
                            <img src="/assets/images/invicta.jpg" alt="" class="hidden w-full h-53 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" />
                        </div>
                        <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                            <dt class="sr-only">Reviews</dt>
                            <dd class="text-blue-600 flex items-center dark:text-indigo-400">
                                <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
                                    <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>4.89 <span class="text-slate-400 font-normal">(128)</span></span>
                            </dd>
                            <dt class="sr-only">Location</dt>
                            <dd class="flex items-center">
                                <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
                                    <circle cx="1" cy="1" r="1" />
                                </svg>
                                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                                    <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                    <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                </svg>
                                <p className='text-xl '>
                                    R$ 1.300,00
                                </p>
                            </dd>
                        </dl>
                        <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                            <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
                                <Link href={"https://wa.me/11951393052"}>
                                    Check availability
                                </Link>
                            </button>
                        </div>
                        <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                            We present to you an unbeatable union between the elegance of the Invicta brand and the power of the anti-hero
                            <a className='font-bold ' href="https://invictastores.com/invicta-marvel-punisher-men-s-watch-48mm-gunmetal-32420"> Marvel Punisher. The Invicta Marvel Punisher </a>
                            watch is the perfect choice for fans of sophisticated watches who want to express their passion for the bravest heroes. Get ready to show your unique personality while dominating time in style!
                        </p>
                    </div>
                </main>
                <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                        <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                            <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Perfume Carolina Herrera</h1>
                            <p class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Dot' Drama</p>
                        </div>
                        <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                            <img src="/assets/images/dot drama.jpg" alt="" class="w-full h-61 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" />
                            <img src="/assets/images/perfumedotdrama.jpg" alt="" class="hidden w-full h-53 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" />
                            <img src="/assets/images/chlogo.png" alt="" class="hidden w-full h-53 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" />
                        </div>
                        <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                            <dt class="sr-only">Reviews</dt>
                            <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
                                <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
                                    <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>4.77 <span class="text-slate-400 font-normal">(128)</span></span>
                            </dd>
                            <dt class="sr-only">Location</dt>
                            <dd class="flex items-center">
                                <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
                                    <circle cx="1" cy="1" r="1" />
                                </svg>
                                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                                    <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                    <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                </svg>
                                <p className='text-xl '>
                                    R$ 600,00
                                </p>
                            </dd>
                        </dl>
                        <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                            <button type="button" class="bg-blue-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
                                <Link href={"https://wa.me/11951393052"}>
                                    Check availability
                                </Link>
                            </button>
                        </div>
                        <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                            Carolina Herrera Dot Drama perfume is a unique combination of exotic and sensual notes that capture the essence of the modern and confident woman. Its enveloping fragrance opens with a juicy touch of red fruits and pear, creating a striking first impression.
                        </p>
                    </div>
                </main>
            </Carousel >
            <Link href="/felix" >
                <button type="button" className="bg-blue-600 text-white text-sm leading-6 font-medium p-3 py-2 px-3 rounded-lg">
                    Back  !
                </button>
            </Link>
            <br />

        </>
    )
}


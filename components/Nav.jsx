"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


const Nav = () => {
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

        setUpProviders();
    }, [])

    return (
        <nav className=" sm: first-letter flex justify-between w-full mb-16 pt-3">
            <Link href='/' className="flex gap-2 flex-center">
                <Image
                    src='/assets/icons/book.png'
                    alt="Promptopia logo"
                    width={70}
                    height={70}
                    className="object-contain" />
                <p className="logo_text">BookPaper</p>
            </Link>
            {/* \DESKTOP NAVIGATION */}
            <div className="sm:flex hidden">
                {session?.user ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt"
                            className="black_btn">
                            Create Note
                        </Link>
                        <button type="button"
                            onClick={signOut}
                            className="outline_btn">
                            Sign Out
                        </button>
                        <Link href="/profile">
                            <Image
                                src={session?.user.image}
                                width={37}
                                height={37}
                                className="rounded-full"
                                alt="profile"
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)} className="black_btn">
                                    Sing In
                                </button>
                            ))}
                    </>
                )}
            </div>

            {/* MOBILE NAVIGATION */}

            <div className="sm:hidden flex relative">
                {session?.user ? (
                    <div className="flex">

                        <Image
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                            onClick={() => setToggleDropdown((prev) => !prev)}
                        />
                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link href="/felix"
                                    className="dropdown_link bg-blue-600 text-white text-sm leading-6 font-medium p-3 py-2 px-3 rounded-lg "
                                    onClick={() => setToggleDropdown
                                        (false)}>
                                    About me !
                                </Link>

                                <Link href="/profile"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown
                                        (false)}
                                >
                                    My Profile
                                </Link>
                                <Link href="/create-prompt"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown
                                        (false)}
                                >
                                    Create Notes
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setToggleDropdown(false);
                                        signOut();
                                    }}
                                    className="mt-5 w-full black_btn"
                                >
                                    Sing Out

                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className="black_btn">
                                    Sing In
                                </button>
                            ))}
                    </>
                )}
            </div>
        </nav>
    )
}

export default Nav
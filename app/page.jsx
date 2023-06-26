import Feed from "@components/Feed"


const Page = () => {

    return (
        <>          
           <section className="w-full flex-center flex-col">
                <h1 className="head_text text-center">
                    SHARE Phrases from Books
                    <br className="max-md:hidden" />
                    <span className="blue_gradient"> that Transformed Lives!</span>
                </h1>
                <p className="desc text-center">
                    On our homepage, we want to create a unique space where you can connect with other lovers of reading and share powerful quotes from books that have made a difference in your life.
                </p>
                <Feed />
          
            </section>
        </>
    )
}

export default Page;
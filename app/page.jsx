import Feed from "@components/Feed";
import RootLayout from "./create-prompt/layout";


const Home = () => (
    <>
            <section className='w-full flex-center flex-col'>
                <h1 className='head_text text-center'>
                    SHARE Phrases from
                    <br className='max-md:hidden' />
                    <span className='blue_gradient text-center'> Books that Transformed Lives!</span>
                </h1>
                <p className='desc text-center'>
                    On our homepage, we want to create a unique space where you can connect with other lovers
                    of reading and share powerful quotes from books that have made a difference in your life.

                </p>

            </section>
      <RootLayout/>



    </>
);

export default Home;


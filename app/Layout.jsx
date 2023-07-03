import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'




export const metadata = {
  title: "BookPaper",
  description: 'Your Readings need to be remembered !'
}

const RootLayout = ({ children }) => (
  <>
    <html lang='en'>
      <body>
        <Provider>
          {/*         <div className='main'>
            <div className='gradient' />
          </div>
   */}
          <Nav />
          {children}
          {/* <main className='app'>
          </main> */}
        </Provider>
      </body>
    </html>
  </>
);

export default RootLayout;
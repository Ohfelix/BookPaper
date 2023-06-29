import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'



export const metadata = {
  title: "BookPaper",
  description: 'Your Readings need to be remembered !'
}

const RootLayout = ({ children }) => (
  <>
    <Provider>

      <Nav />
      {children}

    </Provider>

  </>
);

export default RootLayout;
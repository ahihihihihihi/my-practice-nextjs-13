
import './app.scss'
import { Inter } from 'next/font/google'
import AppHeader from './components/app.header'
import AppFooter from './components/app.footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import 'nprogress/nprogress.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import ReduxProvider from '@/redux/provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ReduxProvider>
          <AppHeader />
          <Container>
            <div className='app-container'>
              {children}
            </div>
          </Container>
          <AppFooter />
        </ReduxProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  )
}

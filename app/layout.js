import { Roboto } from 'next/font/google'
import "./globals.css";
import { AuthProvider } from './Providers';
import { UpperNav } from './components/UpperNav';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from '@/context/ThemeContext';
import ClientThemeWrapper from '../context/ClientThemeWrapper';
import { BooksProvider } from '@/context/BooksContext';

const roboto = Roboto({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Readify Library Services",
  description: "Welcome to Book Haven, your premier destination for book lovers everywhere. Dive into our extensive collection of fiction, non-fiction, and everything in between. Whether you're searching for a thrilling mystery, a heartwarming romance, or a thought-provoking memoir, we have something for everyone.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <ClientThemeWrapper>
            <BooksProvider>
              <AuthProvider>
                <UpperNav />
                <Navbar />
                {children}
              </AuthProvider>
            </BooksProvider>
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

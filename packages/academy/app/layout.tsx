import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Header, Navbar, Main, Footer } from '@labs-pkg/ui';

export const metadata: Metadata = {
  title: 'Labs Academy',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header>
          <Navbar>
            <h1>Logo</h1>
          </Navbar>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <h2>footer</h2>
        </Footer>
      </body>
    </html>
  );
}

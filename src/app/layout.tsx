import type { Metadata } from 'next';

import { Container } from '@/components/container';
import { ScrollIndicator } from '@/components/scroll-indicator';
import { geist } from '~/next.fonts';

import '@/styles/global.scss';

export const metadata: Metadata = {
  title: 'User Social Content',
  description: 'View users and explore their associated posts and comments',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <Container asChild>
          <main>
            {children}

            <ScrollIndicator />
          </main>
        </Container>
      </body>
    </html>
  );
}

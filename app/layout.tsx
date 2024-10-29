// app/layout.tsx
import React from 'react';

// Define metadata for SEO (optional)
export const metadata = {
  title: 'Pocket Tarot',
  description: 'Your Personal Tarot App',
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

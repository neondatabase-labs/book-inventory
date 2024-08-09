import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronRightIcon, SearchIcon } from 'lucide-react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Book Inventory',
  description: 'A simple book inventory app.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <div className="flex h-screen w-full overflow-hidden">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <div className="border-b">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search books..."
                  className="w-full rounded-none border-0 px-10 py-6"
                />
              </div>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

function Sidebar() {
  const letters = [
    ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
    'Other',
  ];

  return (
    <div className="w-[200px] flex-shrink-0 border-r">
      <ScrollArea className="h-full">
        <div className="p-4">
          <h2 className="mb-2 text-lg font-semibold">Authors</h2>
          {letters.map((letter) => (
            <div
              key={letter}
              className="mb-2 flex items-center justify-between"
            >
              <span>{letter}</span>
              <ChevronRightIcon className="h-4 w-4" />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

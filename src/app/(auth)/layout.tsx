export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-[calc(100%-170px)] items-center justify-center">
      {children}
    </div>
  );
}

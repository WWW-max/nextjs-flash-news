export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-4 border-red-600 border-solid">{children}</body>
    </html>
  );
}

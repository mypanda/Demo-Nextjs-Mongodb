export default function Layout({ children, header, footer }: Readonly<{ children: React.ReactNode, header: React.ReactNode, footer: React.ReactNode }>) {
  return (
    <div>
      {header}
      <div>{children}</div>
      {footer}
    </div>
  );
}
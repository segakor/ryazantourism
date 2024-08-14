const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`${className} h-full`}>{children}</div>;
};

export default Layout;

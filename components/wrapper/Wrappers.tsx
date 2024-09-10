export const WrapperTabs = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-nowrap overflow-x-auto md:mt-[80px] mt-[40px]">
      {children}
    </div>
  );
};

export const WrapperGreyPages = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`class_pages bg-[var(--color-longread-grey)] md:pb-40 pb-20 h-full ${className && className}`}>
      {children}
    </div>
  );
};

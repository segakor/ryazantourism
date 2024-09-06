export const WrapperTabs = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-nowrap overflow-x-auto md:mt-[80px] mt-[40px]">
      {children}
    </div>
  );
};

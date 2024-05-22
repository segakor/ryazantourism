export const TextBlock = ({ text }: { text: string }) => {
  return <div className="text3 styled_list styled_link" dangerouslySetInnerHTML={{ __html: text }} />;
};

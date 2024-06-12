import "./style.css";

export const Loader = ({ whithoutHeader }: { whithoutHeader?: boolean }) => {
  return (
    <div className={`loader_wrapper ${whithoutHeader && 'whithoutHeader'}`}>
      <div className="loader"></div>
    </div>
  );
};

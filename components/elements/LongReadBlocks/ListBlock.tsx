import "./style.css";

export const ListBlock = ({ list }: { list: string[] }) => {
  return (
    <ul className="list_block_body">
      {list.map((item, index) => (
        <li className="text3 list_block_body_li" key={index}>{item}</li>
      ))}
    </ul>
  );
};

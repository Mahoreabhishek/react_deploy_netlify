import ListItem from "./ListItem";

const ItemsList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          aria-label={`Delete ${item.item}`}
        />
      ))}
    </ul>
  );
};

export default ItemsList;

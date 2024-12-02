import { List, ListItem, Avatar, Tooltip } from "@mui/material";
import "../styles.css";

const CustomList = () => {
  return (
    <List>
      <ListItem className="list-item">
        <Avatar
          src="https://picsum.photos/50?random=1"
          alt="Imagem 1"
          className="avatar"
        />
        Table
      </ListItem>
      <ListItem className="list-item">
        <Avatar
          src="https://picsum.photos/50?random=2"
          alt="Imagem 2"
          className="avatar"
        />
        List
      </ListItem>
      <ListItem className="list-item">
        <Tooltip title="Avatar do usuário">
          <Avatar
            src="https://picsum.photos/50?random=3"
            alt="Imagem 3"
            className="avatar"
          />
        </Tooltip>
        Tooltip
      </ListItem>
      <ListItem className="list-item">
        <Avatar
          src="https://picsum.photos/50?random=4"
          alt="Imagem 4"
          className="avatar"
        />
        Card
      </ListItem>
    </List>
  );
};

export default CustomList;

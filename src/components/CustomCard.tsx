import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import "../styles.css";

const CustomCard = () => {
  return (
    <Card className="card">
      <CardMedia
        component="img"
        height="300"
        image="https://picsum.photos/800/400"
        alt="Imagem aleatória"
      />
      <CardContent>
        <Typography variant="h5">Exemplo de Card</Typography>
        <Typography variant="body2"></Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;

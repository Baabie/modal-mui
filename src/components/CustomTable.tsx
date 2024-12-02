import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import "../styles.css";

const CustomTable = () => {
  return (
    <div className="table-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Idade</TableCell>
            <TableCell>Imagem</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>João</TableCell>
            <TableCell>30</TableCell>
            <TableCell>
              <img src="https://picsum.photos/50" alt="João" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Maria</TableCell>
            <TableCell>25</TableCell>
            <TableCell>
              <img src="https://picsum.photos/50" alt="Maria" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomTable;

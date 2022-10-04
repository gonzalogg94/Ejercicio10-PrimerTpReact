import { Card, Button, ListGroup } from "react-bootstrap";

const ItemPelicula = ({
  pelicula,
  genero,
  descripcion,
  borrarPelicula,
}) => {

  return (
    <div className="col-sm-12 col-md-4 col-lg-3 my-4">
      <Card className="bgCard">
        <Card.Body>
          <Card.Title>pelicula: {pelicula}</Card.Title>
          <Card.Subtitle>genero: {genero}</Card.Subtitle>
          <ListGroup.Item>descipcion: {descripcion}</ListGroup.Item>
          <Button variant="danger" onClick={() => borrarPelicula(pelicula)}>
            Borrar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemPelicula;

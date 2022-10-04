import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import ListaPeliculas from "./ListaPeliculas";

const FormularioPeliculas = () => {
  const peliculasLocalStorage =
    JSON.parse(localStorage.getItem("arregloPeliculasKey")) || [];

  const [pelicula, setPelicula] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [genero, setgenero] = useState("");
  const [arregloPeliculas, setarregloPeliculas] = useState(
    peliculasLocalStorage
  );

  useEffect(() => {
    localStorage.setItem(
      "arregloPeliculasKey",
      JSON.stringify(arregloPeliculas)
    );
  }, [arregloPeliculas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let objetoPelicula = {pelicula, descripcion, genero };
    setarregloPeliculas([...arregloPeliculas, objetoPelicula]);
    setPelicula("");
    setdescripcion("");
    setgenero("");
  };

  const borrarPelicula = (pelicula) => {
    let arregloModif = arregloPeliculas.filter((item) => item !== pelicula);
    setarregloPeliculas(arregloModif);
  };
  return (
    <article>
      <Form onSubmit={handleSubmit}>
        <h2>Llenar el formulario para dar de alta una pelicula</h2>
        <Form.Group className="mb-3 d-flex pt-3" controlId="formBasicEmail">
          <Form.Label>Nombre de la pelicula</Form.Label>
          <Form.Control
            type="text"
            placeholder="ingrese el nombre de la pelicula"
            onChange={(e) => setPelicula(e.target.value)}
            value={pelicula}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese una descripcion"
            onChange={(e) => setdescripcion(e.target.value)}
            value={descripcion}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 d-flex">
          <Form.Label htmlFor="disabledSelect">Elija un genero</Form.Label>
          <Form.Select
            id="disabledSelect"
            onChange={(e) => setgenero(e.target.value)}
            value={genero}
            required
          >
            <option>Drama</option>
            <option>Comedia</option>
            <option>Terror</option>
            <option>Accion</option>
          </Form.Select>
        </Form.Group>
        <Button variant="warning" type="submit">
          Agregar una pelicula
        </Button>
      </Form>
      <ListaPeliculas
        arregloPeliculas={arregloPeliculas}
        borrarPelicula={borrarPelicula}
      ></ListaPeliculas>
    </article>
  );
};

export default FormularioPeliculas;

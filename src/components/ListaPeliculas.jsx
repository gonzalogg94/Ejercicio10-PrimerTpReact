
import ItemPelicula from './ItemPelicula';

const ListaPeliculas = ({arregloPeliculas,borrarPelicula}) => {
    return (
        <div className="row">
          {arregloPeliculas.map((pelicula, posicion) => (
            <ItemPelicula key={posicion}
            nombre={pelicula.mascota}
            descripcion={pelicula.descripcion}
            borrarPelicula={borrarPelicula}>
          </ItemPelicula>
          ))}
        </div>
      );
};

export default ListaPeliculas;
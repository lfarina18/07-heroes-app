import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [{ searchText }, handleInputChange] = useForm({
    searchText: q,
  });

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Búsquedas</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Buscar</h4>
          <hr />
          <form className='d-grid gap-2' onSubmit={handleSearch}>
            <input
              type='text'
              name='searchText'
              className='form-control'
              placeholder='Héroes'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />
            <button type='submit' className='btn btn-outline-dark mt-1'>
              Buscar...
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Resultados</h4>
          <hr />

          {q === '' ? (
            <div className='alert alert-info'>Buscar un héroe</div>
          ) : (
            heroesFiltered.length === 0 && (
              <div className='alert alert-danger'>
                No hay resultados con el nombre: {q}
              </div>
            )
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

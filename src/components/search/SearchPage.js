import React, { useMemo } from 'react'
import queryString from 'query-string'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchPage = ({history, location}) => {

    
    const { q = ''} = queryString.parse(location.search);

    const initialForm = {
        term: q
    };
    const [ formValues, handleInputChange ] = useForm( initialForm ); 

    const { term } = formValues; 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        history.push(`?q=${term}`); 
        console.log(term); 
    }
    const heroesFiltered =useMemo(() => getHeroByName(q), [q])



    return (
        <div>
            <h1>Search Heroe</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input value={term} autoComplete="off" onChange={handleInputChange} type="text" name="term" placeholder="Find Your Hero" className="form-control" />

                        <button className="btn btn-block btn-outline-primary" type="submit"  >Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>

                    {
                        (q==='') && <div className="alert alert-info"> Search a hero</div>
                    }

                    {
                        (q!=='' && heroesFiltered.length === 0) && <div className="alert alert-danger"> There is no a hero</div>
                    }
                    {

                        
                        heroesFiltered.map(hero => (
                            <HeroCard key={hero.id} hero={hero} />

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

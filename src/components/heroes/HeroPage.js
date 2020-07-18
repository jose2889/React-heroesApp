import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroPage = ({history}) => {

    const {heroeId} = useParams();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]); 

    const handleReturn = () => {

        if (history.length <= 2) {
            history.push("/");
        }else {
            history.goBack(); 

        }
    }


    if (!hero) {
        return <Redirect to="/" />
    }

    const {
        superhero, 
        publisher,
        first_appearance,
        alter_ego,
        characters
    } = hero; 

    console.log(hero); 
    return (
        <div className="row mt-5">
            <div className="col-4 animate__animated animate__fadeInLeft">
                <img src={`../asset/heroes/${heroeId}.jpg`} alt={superhero} className="img-thumbnail" />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
                </ul>

                <h5> Characters </h5>
                <p> { characters } </p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>
        </div>
    )
}

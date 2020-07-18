const { heroes } = require("../data/heroes");

export const getHeroesByPublisher = (publisher) => {


    console.log("llamandoooooooo")

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {

        throw new Error('la informacion ingresada no es valida');
    }

    return heroes.filter( hero => hero.publisher === publisher);
}
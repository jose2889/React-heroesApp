const { heroes } = require("../data/heroes");

export const getHeroById = (heroId) => {

    console.log("otra vez"); 

    return heroes.find( hero => hero.id === heroId);
}
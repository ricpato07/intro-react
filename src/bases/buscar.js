import heroes,{owners} from '../data/heroes';

console.log(heroes);

// Find
export const getHeroeById = (id)=>{
    return heroes.find(valor => {
        return valor.id === id
    });
  }
  
  // Filter
  const getHeroeByOwner = (owner)=>{
      return heroes.filter(valor => {
          return valor.owner === owner;
      });
    }
  
  // en una sola línea
  //const getHeroeByOwner = (owner)=> heroes.filter(valor => valor.owner === owner);
    
  
  //console.log(getHeroeById(2));
  //console.log(getHeroeByOwner("DC"));

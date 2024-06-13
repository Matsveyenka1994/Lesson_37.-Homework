import './animalCard.css';

function AnimalCard({animalData}) {
  console.log(animalData);
  
  return (
    <div>
      <h4>{animalData.name}</h4>
      <p>I am {animalData.species}</p>
      <img src={animalData.img} alt="" />
      
     
    </div>
  );
}

export default AnimalCard;

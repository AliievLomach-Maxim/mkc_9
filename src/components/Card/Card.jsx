const cards = [
  { id: 1, name: 'Card 1' },
  { id: 2, name: 'Card 2' },
  { id: 3, name: 'Card 3' },
]

const Card = () => {
  const handleClick = (event) => {
    console.log('event', event)
  }
  return (
    <div>
      {cards.map((card) => (
        <div key={card.id}>
          <h2>{card.name}</h2>
          {/* <button onClick={() => handleClick(card.id)}>Click on {card.id}</button> */}
          <button onClick={handleClick}>Click on {card.id}</button>
          {/* <button onClick={handleClick}>Click on {card.id}</button>
          <button onClick={(event) => {}}>Click on {card.id}</button> */}
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Card

// const handleCLick = (event)=>{}
// const button = document.querySelector('button')
// button.addEventListener('click',(event)=>{})
// button.addEventListener('click', handleCLick)

// const btn = document.getElementById('btn');

//   btn.addEventListener('click', function () {
//     console.log('handler 1');
//   });

//   btn.addEventListener('click', function () {
//     console.log('handler 2');
//   });

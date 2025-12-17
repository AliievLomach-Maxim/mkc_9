import { useEffect, useLayoutEffect } from 'react'
import { useSomeContext } from '../../context/someContext'

const Card3 = () => {
  const handleClick = () => {
    setValue(100)
  }

  const { setValue } = useSomeContext()

  useEffect(() => {
    console.log('Effect')
    // const div = document.getElementById('root')
    // div.style.width = '100px'
  }, [])

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
    const div = document.getElementById('root')
    div.style.width = '100px'
  }, [])

  console.log('out of Effect')

  return (
    <div>
      Card3:
      <button onClick={handleClick}>Click on</button>
      <input type='text' />
    </div>
  )
}

export default Card3

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

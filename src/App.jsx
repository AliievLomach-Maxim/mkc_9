import Card from './components/Card/Card'
import Card2 from './components/Card2/Card2'
import Card3 from './components/Card3/Card3'
import MyContext from './context/someContext'
import SomeContextProvider from './context/someContext'

const App = () => {
  return (
    <div>
      {/* <MyContext.Provider
        value={{
          value,
          setValue,
        }}
      > */}
      <SomeContextProvider>
        <Card />
      </SomeContextProvider>
      <hr />
    </div>
  )
}

export default App
// import { useState } from 'react'
// import Timer from './components/Timer/Timer'

// const App = () => {
//   const [isShowTimer, setIsShowTimer] = useState(false)
//   return (
//     <div>
//       <button onClick={() => setIsShowTimer(!isShowTimer)}>
//         {isShowTimer ? 'Hide timer' : 'Show timer'}
//       </button>
//       {isShowTimer && <Timer />}
//     </div>
//   )
// }

// export default App
// const App = () => {
//   const valueRef = useRef()

//   console.log('valueRef', valueRef)

//   const handleClick = () => {
//     if (valueRef.current) {
//       valueRef.current.focus()
//     }
//     valueRef.current = 123
//   }

//   console.log('first', valueRef.current)
//   return (
//     <div>
//       <button onClick={handleClick}>Focus</button>
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. At omnis voluptatem minima? Eaque
//         iusto neque minus autem molestias dicta sapiente, maxime at doloremque. Maiores tempora a
//         reiciendis nemo eveniet quidem? Ipsa, aut, consectetur id dolor quae magnam rem
//         exercitationem minima repellat ipsam veniam quos corporis, porro temporibus deserunt nihil
//         suscipit tempora eius aperiam quidem. Porro tempore inventore labore mollitia sed.
//         Necessitatibus delectus voluptate inventore minima unde nihil dicta aliquam minus quisquam
//         aliquid laboriosam perferendis quo id eum, iusto officia at. Odio beatae laboriosam ea,
//         error ratione delectus consequuntur numquam ab. Dolor pariatur eaque fugiat incidunt quas
//         minus doloribus officia autem sit! Corporis perferendis sit iusto ratione. Blanditiis eum,
//         asperiores pariatur iure voluptatem explicabo, expedita consequatur exercitationem dicta
//         aspernatur consequuntur necessitatibus. Perspiciatis perferendis optio voluptates quasi quod
//         sunt. Cupiditate eius numquam temporibus autem dolor, adipisci illum, quidem magni ad
//         accusamus odio veritatis cumque dolore reiciendis, quas nulla consequuntur obcaecati quia
//         fugiat. Nemo, tempora! Quis odit hic nesciunt, maiores ipsam officiis voluptatem incidunt
//         ducimus animi adipisci veniam, mollitia itaque ad quibusdam modi earum vitae error iusto
//         aspernatur consequuntur? Animi repellendus soluta sapiente! Earum unde culpa deleniti
//         similique adipisci expedita quam tempore vel itaque tempora maxime, recusandae porro nostrum
//         illum libero asperiores provident minus nemo eum, voluptatibus qui? Quisquam a beatae in
//         molestiae! Eaque, ut omnis consectetur nemo in eos error, perferendis, quam consequatur
//         reprehenderit id? Saepe at tenetur impedit! Numquam eius laudantium dolores et, error rem,
//         nisi possimus nesciunt alias, repudiandae laborum. Molestias ipsa mollitia saepe vel
//         obcaecati eos quibusdam esse voluptatum eveniet a at nam, numquam possimus reiciendis veniam
//         ad sint nobis cum perspiciatis omnis. Ipsum fuga fugit temporibus modi aut! Unde ipsa
//         consequatur at, officiis corrupti commodi, alias vitae expedita error ad quas quam minus
//         tempore animi repudiandae sed quae ducimus voluptates? Ea assumenda exercitationem sequi
//         dolores minus similique unde?
//       </p>
//       <input type='text' ref={valueRef} />
//     </div>
//   )
// }

// import { useEffect, useMemo, useState } from 'react'

// const users = [
//   { id: 1, name: 'Alex' },
//   { id: 2, name: 'Alex1' },
//   { id: 3, name: 'Alex2' },
//   { id: 4, name: 'Alex3' },
// ]
// const App = () => {
//   const [value, setValue] = useState(0)
//   const [value2, setValue2] = useState(0)
//   const data = users // fetch state....

//   // const someFilteredData = data.map((el) => {
//   //   console.log('someFilteredData')
//   //   for (let i = 0; i < 1000000000; i++) {
//   //     // ...
//   //   }
//   //   return { ...el, age: 42 }
//   // })

//   console.log('first')
//   useEffect(() => {
//     console.log('effect')
//   })

//   const someFilteredData = useMemo(
//     () =>
//       data.map((el) => {
//         console.log('value2', value2)
//         for (let i = 0; i < 1000000000; i++) {
//           // ...
//         }
//         return { ...el, age: 42 }
//       }),
//     [data, value2]
//   )
//   return (
//     <div>
//       {/* <button onClick={() => setValue(value + 1)}>{value}</button>
//       <button onClick={() => setValue2(value2 + 1)}>{value2}</button> */}
//       {someFilteredData.map((el) => (
//         <>
//           <p>{el.name}</p>
//           <p>{el.age}</p>
//         </>
//       ))}
//     </div>
//   )
// }

// export default App

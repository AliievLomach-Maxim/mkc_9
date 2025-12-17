import { createContext, useContext, useState } from 'react'

const MyContext = createContext()

const SomeContextProvider = ({ children }) => {
  const [value, setValue] = useState(0)

  return (
    <MyContext.Provider
      value={{
        value,
        setValue,
        defaultValue: 1000000,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export const useSomeContext = () => useContext(MyContext)

export default SomeContextProvider

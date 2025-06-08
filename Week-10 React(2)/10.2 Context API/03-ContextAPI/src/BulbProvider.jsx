

import { useState, React, createContext } from 'react'
const BulbContext = createContext()

function BulbProvider(children) {
    const [bulbOn, setBulbOn] = useState(true)

    return <BulbContext.Provider value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn
    }}>
        {children}
    </BulbContext.Provider>
}

export default BulbProvider

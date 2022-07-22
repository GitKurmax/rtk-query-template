import React, { useState } from 'react'
import { useGetPokemonByNameQuery, useGetAllPokemonsQuery } from '../services/pokemon'

const Posts = () => {
    const {data, error, isLoading} = useGetAllPokemonsQuery('')
    const {data: pokemon, error: errPokemon, isLoading: isLoadingPockemon} = useGetPokemonByNameQuery('')
    const [showPopup, setShowPopup] = useState<boolean>(false)

    const handleHover = (url: string) => {
        setShowPopup(true)
    }

    return (
        <>
            <div style={{ fontSize: '36px',margin: '50px' }}>
                Posts
            </div>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (<>
                {Object.entries(data).map(pok => {
                    return <div style={{
                        padding: '10px',
                        margin: '10px',
                        border: '1px solid blue',
                        position: 'relative'
                    }} onMouseEnter={() => handleHover(pok[1])}>
                        {pok[0]}
                        <div style={{ display: 'none', position: 'absolute', top: '-100%' }}>
                            {pok[1]}
                        </div>
                    </div>
                })}
            </>) : null}
        </>
    )
}

export default Posts
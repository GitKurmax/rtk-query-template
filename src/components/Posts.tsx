import React, { useState } from 'react'
import {
    useGetPokemonByNameQuery,
    useGetAllPokemonsQuery,
    useDeletePokemonMutation,
    useAddPokemonMutation
} from '../services/pokemon'
import { Pokemon } from '../types'

const Posts = () => {
    const {data, error, isLoading, refetch} = useGetAllPokemonsQuery('')
    const {data: pokemon, error: errPokemon, isLoading: isLoadingPockemon} = useGetPokemonByNameQuery('')
    const [deletePockemon, {}] = useDeletePokemonMutation()
    const [addPockemon, {}] = useAddPokemonMutation()
    const [hovered, setHovered] = useState<string>('')

    const handleHover = (name: string) => {
        setHovered(name)
    }

    const handleDelete = async (pok: Pokemon) => {
        await deletePockemon(pok)
    }

    const handleCreate = async () => {
        await addPockemon(
            {
                id: '123',
                '123': '321',
                deleted: false
            }
        )
    }

    return (
        <>
            <div style={{fontSize: '36px', margin: '50px'}}>
                Posts
            </div>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (<>
                <button onClick={handleCreate}>Add</button>
                {data.filter(pok => !pok.deleted).map((pok: Pokemon) => {
                    const name = Object.keys(pok)[1]
                    const url = pok[name]
                    return (<div
                        key={name}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '10px',
                            margin: '10px',
                            border: '1px solid blue',
                            position: 'relative'
                        }} onMouseEnter={() => handleHover(name)} onMouseLeave={() => handleHover('')}>
                        {name}
                        <button onClick={() => handleDelete(pok)}>Delete</button>
                        <div style={{
                            display: hovered === name ? 'block' : 'none',
                            position: 'absolute',
                            top: '-100%',
                            left: '50px',
                            background: '#fff',
                            padding: '15px',
                            border: '1px solid lightgrey',
                            borderRadius: '15px'
                        }}>
                            {url}
                        </div>
                    </div>)
                })}
            </>) : null}
        </>
    )
}

export default Posts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Pokemon } from '../types/index'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    tagTypes: ['Pokemons'],
    endpoints: (builder) => ({
        getAllPokemons: builder.query<Pokemon[], any>({
            query: () => ({
                url: `pokemons/`,
            }),
            providesTags: (result) => ['Pokemons']
        }),
        getPokemonByName: builder.query<Pokemon, string>({
            query: (name) => `/${name}`,
        }),

        deletePokemon: builder.mutation<Pokemon, Pokemon>({
            query: (body) => ({
                    url: `pokemons/${body.id}`,
                    method: 'PUT',
                    body: {
                        ...body,
                        deleted: true
                }
             }),
            invalidatesTags: ['Pokemons']
        }),

        addPokemon: builder.mutation<Pokemon, Pokemon>({
            query: (body) => ({
                url: `pokemons`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Pokemons']
        }),
    }),
})
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetAllPokemonsQuery, useDeletePokemonMutation, useAddPokemonMutation } = pokemonApi
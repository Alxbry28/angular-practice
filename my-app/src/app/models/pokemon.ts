export interface Pokemon {
  id: number,
  name: string,
  type: string,
  isCool: boolean,
  isStylish: boolean,
  acceptTerm: boolean
}

export interface PokemonType {
  key: number,
  value: string
}

import { useQuery, gql } from '@apollo/client'
import React from 'react'
import Character from '../Character/Character'
import "./characterlist.scss"
import spinner from "../../assets/images/spinner.svg"
import Pagination from '../Pagination/Pagination'
import { useParams } from 'react-router'



function CharacterList() {
    const {page} = useParams();

    const GET_CHARACTERS = gql`
query getCharacters($pageNo: Int!){
    characters(page: $pageNo){
      results{
        id
        name
        status
        species
        location{
          id
          name
        }
        image
        episode{
          id
          name
        }
      }
    }
  }
`;
    const {loading, data} = useQuery(GET_CHARACTERS,{
        variables:{
            pageNo: page ? +page : 1
        }
    });

    const characters = data?.characters.results
    return (
        <section className="character-list">
            <div className="container">
            
            {
                    loading ? <img style={{margin: "0 auto"}}src={spinner} alt="Loading.." /> : 
                    characters.map(character => (
                        <Character
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            location={character.location}
                            image={character.image}
                            episode={character.episode}

                        />
                    ))
                    
                }
                <Pagination />
            </div>
        </section>
    )
}

export default CharacterList

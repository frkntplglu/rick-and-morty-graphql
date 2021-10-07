import { useQuery, gql } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router'
import PageHead from '../PageHead/PageHead';
import "./characterdetail.scss"
import spinner from "../../assets/images/spinner.svg"



function CharacterDetail() {
    const {id} = useParams();
    const GET_CHARACTERS = gql`
query getCharacters($id: ID!){
    character(id: $id){
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
`;
    const {loading, data} = useQuery(GET_CHARACTERS,{
        variables:{
            id: id
        }
    });

    if(loading) return (<img style={{margin: "0 auto"}}src={spinner} alt="Loading.." />)
    return (
        <section className="character-detail">
            <PageHead title={data.character.name} />
            <img src={data.character.image} className="character-detail-image" alt={data.character.name} />
        </section>
    )
}

export default CharacterDetail

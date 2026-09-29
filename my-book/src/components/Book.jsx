import { useState } from 'react'
import HTMLFlipBook from 'react-pageflip';

function MyBook(props) {

    const pokemonData = [
    {
      id: "006",
      name: "Charizard",
      types: ["Fire", "Flying"],
      description: "Flies in search of strong opponents. Breathes extremely hot fire that melts anything, but never uses it on weaker foes."
    },
    {
      id: "025",
      name: "Pikachu",
      types: ["Electric"],
      description: "When Pikachu meet, they touch tails to exchange electricity as a greeting."
    },
    {
      id: "125",
      name: "Electabuzz",
      types: ["Electric"],
      description: "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms."
    },
    {
      id: "185",
      name: "Sudowoodo",
      types: ["Rock"],
      description: "Despite looking like a tree, its body is more like rock. Hates water and hides when it rains."
    },
    {
      id: "448",
      name: "Lucario",
      types: ["Fighting", "Steel"],
      description: "Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario."
    },
    {
      id: "658",
      name: "Greninja",
      types: ["Water", "Dark"],
      description: "Creates throwing stars from compressed water that can slice through metal when thrown at high speed."
    },
    {
      id: "491",
      name: "Darkrai",
      types: ["Dark"],
      description: "A legendary Pokémon that appears on moonless nights, putting people to sleep and giving them nightmares."
    }
  ];

    return (
        <>
        {/* <HTMLFlipBook width={300} height={500}>
            <div className="demoPage border">Page 1</div>
            <div className="demoPage border">Page 2</div>
            <div className="demoPage border">Page 3</div>
            <div className="demoPage border">Page 4</div>
            <div className="demoPage border">Page 5</div>
        </HTMLFlipBook> */}

        <HTMLFlipBook width={370} height={600}
        maxShadowOpacity={0.5}
        drawShadow={true}
        showCover={true}
        // size='fixed'
        >
            <div className="page" style={{background: 'transparent'}}>
                <div className="page-content cover flex h-lvh  justify-center items-center text-white font-bold bg-pink-500  ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" alt="pokemon-logo" />
                </div>

            </div>

            {pokemonData.map((pokemon) => {
                return(

                <div className="page" key={pokemon.id}>

                <div className="flex h-lvh p-6 flex-col justify-center items-center text-white font-bold bg-pink-900 shadow-xl ">
                    <div className="pokemon-container ">

                    <img src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${pokemon.id}.png`} width={200} alt="${pokemon.name}" />
                    <div className="pokemon-info text-center">
                        <h2>{pokemon.name}</h2>
                        <h2>{pokemon.id}</h2>
                    </div>
                    {
                        pokemon.types.map((type)=> {
                            <span className={`pokemon-type type-${type.toLowerCase()}`}>
                                {type}
                            </span>
                        })
                    }
                    </div>
                    <p className='text-center'>{pokemon.description}</p>
                </div>
                </div>
                )
            })}

        </HTMLFlipBook>
        
          </>
    );
}
export default MyBook
import React, { useState } from "react";

import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";
import { CharacterLayout } from "../sw-character-layout";
import { CharacterList } from "../sw-character-list";

import { ReactComponent as PlanetSVG } from "../../assets/planet.svg";
import { Select } from "../sw-select";

export const Content = () => {
    const [tab, setTab] = useState("Characters");

    const handleChangeTab = (e) => {
        setTab(e.target.value);
    };

    const planetRotationItem = (
        <>
            <PlanetSVG width={50} height={50} />
            <p>planets</p>
        </>
    );

    return (
        <div className="content-layout">
            <Select tab={tab} handleChangeTab={handleChangeTab} />

            {tab === "Characters" &&
                swCharacters.map((character) => (
                    <CharacterLayout key={character.name} item={character}>
                        <CharacterList label="name:" item={character.name} />
                        <CharacterList label="gender:" item={character.gender} />
                        <CharacterList label="birth year:" item={character.birth_year} />
                        <CharacterList label="height:" item={character.height} />
                        <CharacterList label="mass:" item={character.mass} />
                        <CharacterList label="hair color:" item={character.hair_color} />
                        <CharacterList label="skin color:" item={character.skin_color} />
                        <CharacterList label="eye color:" item={character.eye_color} />
                    </CharacterLayout>
                ))}

            {tab === "Planets" &&
                swPlanets.map((planet) => (
                    <CharacterLayout key={planet.name} item={planet}>
                        <CharacterList label="name:" item={planet.name} />
                        <CharacterList
                            label={planetRotationItem}
                            item={planet.rotation_period}
                        />
                        <CharacterList label="Terrain:" item={planet.terrain} />
                        <CharacterList label="Orbital period:" item={planet.orbital_period} />
                        <CharacterList label="Diameter:" item={planet.diameter} />
                        <CharacterList label="Climate:" item={planet.climate} />
                        <CharacterList label="Gravity:" item={planet.gravity} />
                        <CharacterList label="Surface water:" item={planet.surface_water} />
                        <CharacterList label="Population:" item={planet.population} />
                    </CharacterLayout>
                ))}

            {tab === "Starships" &&
                swStarships.map((starship) => (
                    <CharacterLayout key={starship.name} item={starship}>
                        <CharacterList label="Model:" item={starship.model} />
                        <CharacterList label="Manufacturer:" item={starship.manufacturer} />
                        <CharacterList label="Starship class:" item={starship.starship_class} />
                        <CharacterList label="Cost in credits:" item={starship.cost_in_credits} />
                        <CharacterList label="Length:" item={starship.length} />
                        <CharacterList label="Max atmosphering speed:" item={starship.max_atmosphering_speed} />
                        <CharacterList label="Crew:" item={starship.crew} />
                        <CharacterList label="Passengers:" item={starship.passengers} />
                        <CharacterList label="Cargo capacity:" item={starship.cargo_capacity} />
                        <CharacterList label="Consumables:" item={starship.consumables} />
                        <CharacterList label="Hyperdrive rating:" item={starship.hyperdrive_rating} />
                        <CharacterList label="MGLT:" item={starship.MGLT} />
                    </CharacterLayout>
                ))}
        </div>
    );
};

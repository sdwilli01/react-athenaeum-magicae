import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { OPEN5E_BASE_LOCATION } from "../Constants";

export default function Spell(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [spell, setSpell] = useState(null);

    let params = useParams();
    const spellSlug = params.spellId;
    const spellPath = `${OPEN5E_BASE_LOCATION}spells/?slug=${spellSlug}`;

    useEffect(() => {
        fetch(spellPath)
            .then(res => res.json())
            .then(
                (result) => {
                    const spell = result.results[0];

                    setIsLoaded(true);
                    setSpell(spell);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h2>{spell.name}</h2>
                <h3>School: {spell.school}</h3>
                <h3>{spell.level}</h3>
                <h3>Range: {spell.range}</h3>
                <h3>Casting Time: {spell.casting_time}</h3>
                <h3>Duration: {spell.duration}</h3>
                <h3>Concentration: {spell.concentration}</h3>
                <h3>Components: {spell.components}</h3>
                <h3>Material: {spell.material}</h3>
                <div>
                    <h3>Description:</h3>
                    <p>{spell.desc}</p>
                </div>
                <div>
                    <h3>Higher Level:</h3>
                    <p>{spell.higher_level}</p>
                </div>
            </div>
        );
    }
}

import { useState, useEffect } from "react";

import { OPEN5E_BASE_LOCATION } from "../Constants";
import TomeItem from "./TomeItem";

export default function TomeDirectory(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [spellLevels, setSpellLevels] = useState(null);

    const magicClass = props.magicClass;
    const school = props.magicSchool;
    const title = `${magicClass} ${school} Tomes`;

    const spellsPath = `${OPEN5E_BASE_LOCATION}spells/`;
    const searchParams = `?school=${school}`;
    const spellsLocation = spellsPath + searchParams;

    useEffect(() => {
        fetch(spellsLocation)
            .then(res => res.json())
            .then(
                (result) => {
                    const rawSpells = result.results;
                    const classSpells = rawSpells.filter((spell) => {
                        const classes = spell.dnd_class.toLowerCase();
                        const hasSpell = classes.includes(magicClass);

                        if (!hasSpell) {
                            return false;
                        }

                        return true;
                    });

                    let spellTomes = new Set();

                    classSpells.forEach((spell) => {
                        spellTomes.add(spell.level_int);
                    });

                    setIsLoaded(true);
                    setSpellLevels(spellTomes);
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
                <h2>{title}</h2>
                <ul>
                    {[...spellLevels].sort().map((level) =>
                        <TomeItem 
                            key={level.toString()} 
                            level={level}
                            magicClass={magicClass}
                            school={school}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

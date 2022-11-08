import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { OPEN5E_BASE_LOCATION } from "../Constants";

export default function Tome(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [spells, setSpells] = useState([]);

    let params = useParams();
    const school = params.schoolId;
    const magicClass = params.classId;
    const level = params.levelId;
    const title = `Level ${level} ${magicClass} ${school} spells`;

    const spellsPath = `${OPEN5E_BASE_LOCATION}spells/`;
    const searchParams = `?school=${school}&level_int=${level}`;
    const spellsLocation = spellsPath + searchParams;

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
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

                    setIsLoaded(true);
                    setSpells(classSpells);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h2>{title}</h2>
                <ul>
                    {spells.map((spell) => (
                        <li key={spell.name}>
                            <Link to={`/spellDetails/${spell.slug}`}>{spell.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}


export default function Tome(props) {
    const level = props.level;
    // const magicClass = props.magicClass;
    const school = props.school;
    const title = 'Level ' + level + ' ' + school + ' spells';

    return (
        <li>
            {title}
        </li>
    );
}
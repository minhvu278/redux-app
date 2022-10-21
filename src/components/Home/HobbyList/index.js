import './style.css'

HobbyList.defaultProps = {
    hobbyList: [],
    active: null,
    onHobbyClick: null
}

function HobbyList(props) {
    const {hobbyList, activeId, onHobbyClick} = props;

    const handleClick = (hobby) => {
        if (onHobbyClick) {
            onHobbyClick(hobby)
        }
    }

    return (
        <ul className="hobby-list">
            {hobbyList.map(hobby => (
                <li
                    className={hobby.id === activeId ? 'active' : ''}
                    onClick={() => handleClick(hobby)}
                    key={hobby.id}>
                    {hobby.title}
                </li>
            ))}
        </ul>
    )
}

export default HobbyList
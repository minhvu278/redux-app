import {useDispatch, useSelector} from "react-redux";
import HobbyList from "../components/Home/HobbyList";
import {addNewHobby} from "../actions/hobby";

const randomNumber = () =>{
    return 1000 + Math.trunc((Math.random() * 9000))
}

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list)
    const activeId = useSelector(state => state.hobby.activeId)
    const dispatch = useDispatch()

    console.log("Hobby List: ", hobbyList)

    const handleAddHobbyClick = () => {
        // Random a hobby object: id + title
        const newId = randomNumber()
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`
        }

        // Dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby)
        dispatch(action)
    }

    const handleHobbyClick = (hobby) => {

    }

    return (
        <div className="home-page">
            <h1>Hello Bae</h1>

            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList hobbyList={hobbyList}
                       activeId={activeId}
                       onHobbyClick={handleHobbyClick()}
            />
        </div>
    )
}

export default HomePage
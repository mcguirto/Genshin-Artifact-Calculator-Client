import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// Display inports
import { Container, Card, Button } from 'react-bootstrap'
import LoadingScreen from '../shared/LoadingScreen'
import messages from '../shared/AutoDismissAlert/messages'

// API stuff
import { getOneCharacter, updateCharacter, removeCharacter } from '../../api/characters'
import EditCharacterModal from './EditCharacterModal'

// Get character from the the api and display them.

const ShowCharacter = (props) => {
    const { user, msgAlert } = props
    const navigate = useNavigate()

    // place holder the the character and the character's id, so the API can fetch it.
    const [character, setCharacter] = useState(null)
    
    // used to update the character
    const { id } = useParams()
    const [updated, setUpdated] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)

    console.log('user in props', user)
    console.log('the character in showCharacter', character)

    // Get the character from the API
    useEffect(() => {
        getOneCharacter(user, id)
            .then(res => setCharacter(res.data.character))
            .catch(err => {
                msgAlert({
                    heading: 'Error getting character',
                    message: messages.getCharactersFailure,
                    variant: 'danger'
                })
                //navigate back to the home page if there's an error fetching
                navigate('/')
            })
    }, [updated])

    // Delete the character from API if user click the remove button
    const removeTheCharacter = () => {
        removeCharacter(user, id)
            // on success send a success message
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.removeCharacterSuccess,
                    variant: 'success'
                })
            })
            // then navigate to index
            .then(() => {navigate('/')})
            // on failure send a failure message
            .catch(err => {                   
                msgAlert({
                    heading: 'Error removing character',
                    message: messages.removeCharacterFailure,
                    variant: 'danger'
                })
            })
    }
    
    // If the character hasn't been loaded yet, show a loading message
    if (!character) {
        return <LoadingScreen />
    }

    return (
        <>
            <Container className="fluid">
                <Card>
                    <Card.Header>{ character.name }</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <div><small>Level: { character.level }</small></div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => setEditModalShow(true)} 
                            className="m-2" 
                            variant="warning"
                        >
                            Edit Character
                        </Button>
                        <Button onClick={() => removeTheCharacter()}
                            className="m-2"
                            variant="danger"
                        >
                            Remove {character.name}
                        </Button>
                    </Card.Footer>
                </Card>
            </Container>
            <EditCharacterModal 
                user={user}
                character={character} 
                show={editModalShow} 
                updateCharacter={updateCharacter}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setEditModalShow(false)} 
            />
        </>
    )
}

export default ShowCharacter
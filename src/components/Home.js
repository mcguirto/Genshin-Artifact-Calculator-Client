
// import ArtifactsIndex from './artifacts/ArtifactsIndex'
import './style.css'

import ArtifactsIndex from './artifacts/ArtifactsIndex'
import Index from './Index'


const Home = (props) => {
	console.log('props in home', props)

	const { user, msgAlert } = props

	return (
		<>
		<div class="container">
			<h2>See the Artifacts</h2>
			{
				user ?
					<Index msgAlert={ msgAlert } user={ user } />
				:
					<p>You need to sign in!</p>
			}
		</div>	
			
		</>
	)
}

export default Home

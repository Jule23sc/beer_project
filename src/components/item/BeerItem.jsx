import { Link } from 'react-router-dom';

const BeerItem = (props) => {
	
	return (
		<div>
			<img src={props.image} alt={props.name}/>
			<div>
				<h3>{props.name}</h3>
				<h3>{props.tagline}</h3>
				<p>{props.brewers_tips}</p>
				<p>Created by: {props.contributed_by}</p>
				<Link to={"/beers/details/" + props.id}>show Details</Link>
			</div>
		</div>
	)
}
export default BeerItem;

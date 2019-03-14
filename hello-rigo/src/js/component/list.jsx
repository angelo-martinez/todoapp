import React from "react";
import PropTypes from "prop-types";

const List = props => (
	<ul className="list-group list-group-flush">
		{props.items.map((item, index) => (
			<li key={index} className="list-group-item">
				{item}
			</li>
		))}
	</ul>
);
List.propTypes = {
	item: PropTypes.string,
	index: PropTypes.number,
	items: PropTypes.array
};
export default List;

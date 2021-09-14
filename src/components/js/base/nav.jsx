function NavSoc(props) {
	return (
		<div className="cont-sub-soc">
			<a className="icon-link" href={props.reef}>
				<i className="icon">
					<i className={props.classes}></i>
				</i>
			</a>
		</div>
	);
}

module.exports = NavSoc;

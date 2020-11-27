import React from 'react';
import { Form } from 'react-bootstrap';
import '../css/index.css';

function ComboBox(props) {
	const { onChange } = props;
	return (
		<div className="contenedor-selects">
			<br />
			<div>
				<h6 > Pathway </h6>
				<select className="selectBox" name="scenathon_id" onChange={onChange}>
					<option value="6">Sustainable</option>
					<option value="5">Current trend</option>

				</select>
			</div>
			<br />
			<div>
				<h6 > Trade Adjustment </h6>

				<select className="selectBox" name="Iteration" onChange={onChange}>
					<option value="after">After </option>
					<option value="before">Before </option>
				</select>
			</div>

			<br />
			<div>
				<h6 > Year </h6>

				<Form>
					<select className="selectBox" name="Year" onChange={onChange} >
						<option value="" disabled selected hidden>2050</option>
						<option value="2000">2000</option>
						<option value="2005">2005</option>
						<option value="2010">2010</option>
						<option value="2015">2015</option>
						<option value="2020">2020</option>
						<option value="2025">2025</option>
						<option value="2030">2030</option>
						<option value="2035">2035</option>
						<option value="2040">2040</option>
						<option value="2045">2045</option>
						<option value="2050">2050</option>
					</select>
				</Form>
			</div>

			<br />
		</div>
	)
}
export default ComboBox;
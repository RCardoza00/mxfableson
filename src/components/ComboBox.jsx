import  React,{useEffect } from 'react';
import '../css/index.css';


var expanded = false;
function ComboBox(props) {
const { onChange } = props;
const groupcheckbox = React.createRef();
const regionscheckbox = React.createRef();
const countriescheckbox = React.createRef();

const check = (nameComboBox) => {
	let checkbox=null;
	switch (nameComboBox){
		case "group":
			checkbox=groupcheckbox;
			if (groupcheckbox.current.checked) {
				regionscheckbox.current.checked = true;
				countriescheckbox.current.checked = true;
			}
			groupcheckbox.current.checked = true;
			checkbox=groupcheckbox;
			break;
		case "regions":
			checkbox=regionscheckbox;
			if (!regionscheckbox.current.checked && countriescheckbox.current.checked && groupcheckbox.current.checked) {
				groupcheckbox.current.checked = false;
				checkbox=countriescheckbox;
			} 
			else if (regionscheckbox.current.checked && countriescheckbox.current.checked) {
				groupcheckbox.current.checked = true;
				checkbox=groupcheckbox;
			} 
			else if (!countriescheckbox.current.checked && !regionscheckbox.current.checked && !groupcheckbox.current.checked) {
				checkbox=regionscheckbox;
				regionscheckbox.current.checked = true
			}
			break;
		case "countries":
			checkbox=countriescheckbox;
			if (!countriescheckbox.current.checked && regionscheckbox.current.checked && groupcheckbox.current.checked) {
				groupcheckbox.current.checked = false;
				checkbox=regionscheckbox;
			} 
			else if (regionscheckbox.current.checked && countriescheckbox.current.checked) {
				checkbox=groupcheckbox;
				groupcheckbox.current.checked = true;
			} 
			else if (!countriescheckbox.current.checked && !regionscheckbox.current.checked && !groupcheckbox.current.checked) {
				checkbox=countriescheckbox;
				countriescheckbox.current.checked = true
			}
			break;
		default:break;
	}

	onChange(checkbox.current);
}

useEffect( () => {
	groupcheckbox.current.checked = true;
	regionscheckbox.current.checked = true;
	countriescheckbox.current.checked = true;
	}, []);

const showCheckboxes = (nameComboBox) => {
	var checkboxes = document.getElementById("checkboxes");
	if (!expanded) {
		checkboxes.style.display = "block";
		expanded = true;
	} 
	else {
		checkboxes.style.display = "none";
		expanded = false;
	}
}

return (
	<div className="contenedor-selects">
		<div>
			<h6 className="selectBoxTitle">Pathway </h6>
			<select className="selectBox" name="scenathon_id" onChange={onChange}>
				<option value="6">Sustainable</option>
				<option value="5">Current trend</option>
			</select>
		</div>
		<br/>
		<div>
			<h6 className="selectBoxTitle">Trade adjustment </h6>
			<select className="selectBox" name="Iteration" onChange={onChange}>
				<option value="after">After </option>
				<option value="before">Before </option>
			</select>
		</div>
		<br/>
		<div>
			<h6 className="selectBoxTitle">Countries</h6>
			<div id="checkBoxContainer" className="selectBox checkBoxContainer">
				<div  onClick={() => { showCheckboxes() }}>
					<select id="comboboxcheckboxes" className="selectBox">
						<option value="" disabled selected hidden> </option>
					</select>
					<div className="overSelect">Countries</div>
				</div>
				<div id="checkboxes">
					<label className="container">
						<input onClick={() => { check("group") }} ref={groupcheckbox} value="group" type="checkbox" name="GraficaType" />
						<p>Global</p>
						<span className="checkmark"></span>
					</label>
					<label className="container">
						<input onClick={() => { check("regions") }} ref={regionscheckbox} value="regions" type="checkbox" name="GraficaType" />
						<p>Not Fable Countries</p>
						<span className="checkmark"></span>
					</label>
						<label className="container">
						<input onClick={() => { check("countries") }} ref={countriescheckbox} value="countries" type="checkbox" name="GraficaType"  />
						<p>ALL FABLE countries</p>
						<span className="checkmark"></span>
					</label>
				</div>
			</div>
		</div>
		<div>
			<h6 className="selectBoxTitle">Report</h6>
			<button type="button" className="buttonCSV" onClick={props.onClick}>Export to CSV</button>
		</div>
	</div>
)}
export default ComboBox;
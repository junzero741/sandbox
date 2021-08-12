import React, {useState} from 'react';

interface MyFormProps {
	onSubmit : (form:{name:string, desc: string}) => void;
}


const MyForm = ({onSubmit}:MyFormProps) => {
	const [form, setForm] = useState({
		name: "",
		desc: ""
	})

	const {name, desc} = form;

	const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setForm({
			...form,
			[name]:value
		})
	}	

	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(form);
		setForm({
			name: "",
			desc: ""
		})
	}

	return(
		<form onSubmit ={handleSubmit}>
			<input name="name" value={name} onChange={handleChange}></input>
			<input name="desc" value={desc} onChange={handleChange}></input>
			<button type="submit">submit</button>
		</form>
	)
}


export default MyForm;
import { useState } from 'react';


export function useForm() {
  const [state, setState] = useState({
    email: '',
    password: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

}
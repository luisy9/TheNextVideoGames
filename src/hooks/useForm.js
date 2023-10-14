import { useMemo, useState } from 'react'

export const useForm = (initialForm = {}) => {
  const [formState = [], setFormState] = useState(initialForm)
  const [formValidation, setFormValidation] = useState({ passNoCoinciden: null, passErroLength: null, nameIsRequired: null })

  const onInputChange = ({ target }) => {
    const { name, value } = target

    setFormState({
      ...formState,
      [name]: value
    })
  }

  // const isValid = ({loginPassword = '', loginEmail = '', registerName = '', registerEmail = '', registerPassword1 = '' , registerPassword2 = ''}) => {
  //   if('nombreRegister' in formState && 'emailRegister' in formState && 'passwordRegister1' in formState && 'passwordRegister2' in formState){

  //     //isRegister
  //     // if(registerPassword1 !== registerPassword2){
  //     //   setFormValidation({...formState, passNoCoinciden: true});
  //     // }

  //     // if(registerPassword1 <= 5 || registerPassword2 <= 5){
  //     //   setFormValidation({...formState, passErroLength: true});
  //     // }
  //   }

  // };

  const onResetForm = () => {
    setFormState(initialForm)
  }

  return {
    ...formState,
    formValidation,
    // isValid,
    onResetForm,
    onInputChange
  }
}

import { useState } from 'react';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'




function SignupPage() {
const [welcomeMessage,setWelcomeMessage] = useState('');
const [emailMessage,setEmailMessage] = useState('');
const [language,setLanguage] = useState('en')

    function handleSubmit(e){
        e.preventDefault();
        console.log(language)
        switch (language) {
            case 'en':
                console.log('rodou en')
                setWelcomeMessage('Hello');
                break;
            case 'de':
                setWelcomeMessage('Hallo');
                break;  
                case 'fr':
                setWelcomeMessage('Bonjour');
                break;  
            default:
                break; 
        }

    }

    return (
        <Form onSubmit={handleSubmit}>
  <FormGroup floating>
    <Input
      id="email"
      name="email"
      placeholder="Escreva seu email aqui"
      type="email"
      value={emailMessage}
      onChange={(e) => setEmailMessage(e.target.value)}
    />
    <Label for="email">
      Email
    </Label>
  </FormGroup>
  <FormGroup floating>
    <Input
      id="password"
      name="password"
      placeholder="Digite sua senha aqui"
      type="password"
    />
    <Label for="password">
      Password
    </Label>
  </FormGroup>
  <FormGroup>
    <Label for="language">
      Idioma
    </Label>
    <Input
      id="language"
      name="language"
      type="select"
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
    >
      <option value="en">
        Inglês
      </option>
      <option value="de">
        Alemão
      </option>
      <option value="fr">
        Fracês
      </option>
    </Input>
  </FormGroup>
  <Button>Logar</Button>
        <p>{welcomeMessage}</p>
        <p>{emailMessage}</p>
</Form>
    )
}

export default SignupPage ;
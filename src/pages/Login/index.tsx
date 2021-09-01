import { useState } from 'react';

import { Container, LogoSection, FormSection } from './styles';
import { SignUpForm } from '../../components/Forms/SignUpForm';

import logo from '../../assets/images/Logo.svg';
import { SignInform } from '../../components/Forms/SignInForm';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Container>
      <LogoSection>
        <img src={logo} alt="Logo" />
        <span onClick={() => setIsSignUp(!isSignUp)}>
          {!isSignUp ? (
            <>
              Não tem uma conta? <span>Cadastre-se</span>
            </>
          ) : (
            <>
              Já possui uma conta? Faça <span>Login</span>
            </>
          )}
        </span>
      </LogoSection>
      <FormSection>
        {isSignUp ? <SignUpForm onToggleForm={setIsSignUp} /> : <SignInform />}
      </FormSection>
    </Container>
  );
};

export default Login;

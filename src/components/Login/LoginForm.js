import './Login.css';
import { Form, Button, Alert } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { validationLogin } from "../../helpers/Validations";
import { useNavigate } from "react-router-dom";

const LoginFormulary = () => {
  const [userLogged, setUserLogged] = useState({
    email: "",
    password: "",
  });
  const [adminUser, setAdminUser] = useState(false);
  const { login, auth, adminLogin } = useContext(UserContext);
  const [loginErrors, setLoginErrors] = useState({});
  const navigate = useNavigate();

  const handleKeyUp = (e) => {
    setUserLogged({
      ...userLogged,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validationLogin(userLogged);
    setLoginErrors(errors);
    if (Object.keys(errors).length === 0) {
      if(adminUser){
        const errors = await adminLogin(userLogged);
        setLoginErrors(errors)
      }else{
        const errors = await login(userLogged);
        setLoginErrors(errors)
      }
    }
  };

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth]);

  return (
    <div className="login-container">
      <Form className="text-light login-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 " controlId="formLoginEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Ingresá tu email"
            onKeyUp={handleKeyUp}
          />
          <Form.Text className="text-muted">
            No compartiremos tu dirección email con nadie.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLoginPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Contraseña"
            onKeyUp={handleKeyUp}
          />
        </Form.Group>
        {Object.keys(loginErrors).length === 0
          ? null
          : Object.values(loginErrors).map((error, index) => (
              <Alert key={index} variant="danger">
                {error}
              </Alert>
            ))}
        <Button type="submit" onSubmit={handleSubmit} className="glow-on-hover border-none p-2">
          Iniciar Sesión
        </Button>
      </Form>
    </div>
  );
};

export default LoginFormulary;

import { AnimationContainer, Content, Container } from "./style";
import formSchema from "./formYup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory, Redirect } from "react-router-dom";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import api from "../../Services/api";
import { toast } from "react-toastify";
const Login = ({ authenticated, setAuthenticated }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const history = useHistory();
  const handleNavigate = (path) => {
    return history.push(path);
  };
  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@Kenziehub:token", JSON.stringify(token));
        localStorage.setItem("@Kenziehub:user", JSON.stringify(user));

        setAuthenticated(true);

        return history.push(`/dashboard`);
      })
      .catch((_) => toast.error("E-mail ou senha inválidos"));

    reset();
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Login</h2>
            <Input
              label="E-mail"
              placeholder="Digite seu e-mail"
              register={register}
              name="email"
              error={errors.email?.message}
            />
            <Input
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
              register={register}
              name="password"
              error={errors.password?.message}
            />
            <Button type="submit">Entrar</Button>
            <p>Ainda não possui uma conta?</p>
          </form>
          <Button greySchema onClick={() => handleNavigate("/register")}>
            Cadastre-se
          </Button>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default Login;

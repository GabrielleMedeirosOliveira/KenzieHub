import { Content, AnimationContainer, Container } from "./style";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import NavBar from "../../Components/NavBar";
import SelectContent from "../../Components/Select";
import Options from "../../Components/OptionsSelect";

import formSchema from "./formYup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../Services/api";
import { toast } from "react-toastify";
import { useHistory, Redirect } from "react-router-dom";
const Register = ({ authenticated }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const history = useHistory();
  const onSubmitFunction = ({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) => {
    const user = { name, email, password, bio, contact, course_module };
    api
      .post("/users", user)
      .then((_) => {
        toast.success("Parabéns, conta criada com sucesso!");
        return history.push("/login");
      })
      .catch((_) => toast.error("Erro ao criar a conta, e-mail já cadastrado"));
    reset();
  };
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <NavBar nameButton="Voltar" path="/login" />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Crie a sua conta</h1>
            <h3>Rápido e grátis, vamos nessa</h3>
            <Input
              label="Nome"
              placeholder="Seu nome"
              register={register}
              name="name"
              error={errors.name?.message}
            />
            <Input
              label="E-mail"
              placeholder="Seu melhor e-mail"
              register={register}
              name="email"
              error={errors.email?.message}
            />
            <Input
              label="Senha"
              placeholder="Uma senha bem segura"
              type="password"
              register={register}
              name="password"
              error={errors.password?.message}
            />
            <Input
              label="Confirmação de senha"
              placeholder="Confirme sua senha"
              type="password"
              register={register}
              name="confirmPassword"
              error={errors.confirmPassword?.message}
            />
            <Input
              label="Bio"
              placeholder="Bio"
              register={register}
              name="bio"
              error={errors.bio?.message}
            />
            <Input
              label="Contatos"
              placeholder="Adicione um contato: LinkedIn, Celular..."
              register={register}
              name="contact"
              error={errors.contact?.message}
            />
            <SelectContent
              name="course_module"
              label="Módulo do curso:"
              error={errors.course_module?.message}
              register={register}
            >
              <Options value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </Options>
              <Options value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </Options>
              <Options value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </Options>
              <Options value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </Options>
            </SelectContent>
            <Button type="submit">Enviar</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default Register;

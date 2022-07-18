import * as yup from "yup";

const formSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),
  password: yup
    .string()
    .required("Campo obrigatório!")
    .min(8, "Senha incompativel: mínimo 8 caracteres")
    .matches(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])",
      "Senha incompativel: necessário conter letras (maiúsculas e minúsculas), caracteres especiais e números"
    ),
});

export default formSchema;

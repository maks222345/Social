import { Heading } from "../../components/Typography/Heading/Heading";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { LoginStyle } from "./LoginPage.style";
import { useForm, Controller } from "react-hook-form";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { useNavigate } from "react-router-dom";
// import = as yup from "yup"
// import { yupResolver } from "@hookform/resolvers/yup";

const loginPageFiels = {
  userEmail: "",
  userPassword: "",
};

export const LoginPage = () => {
  const {
    control,
    formState: { errors},
    handleSubmit,
  } = useForm({
     defaultValues: loginPageFiels ,
  });

const navigate = useNavigate()

  const onLoginFormSumbit = (data: any) => {
    if (data) {
       navigate('/main-page')
    }
  };

  return (
    <LoginStyle>
      <Heading headingType="h1" headingText="Авторизация" />
      <form onSubmit={handleSubmit(onLoginFormSumbit)}>
        <Controller
          name="userEmail"
          control={control}
          render={({ field }) => (
            <AppInput
              type="tel"
              hasError={!!errors.userEmail}
              errorText="Ошибка"
              required
              placeholder="email"
              {...field}
            />
          )}
        />
        <Controller
          name="userPassword"
          control={control}
          render={({ field }) => (
            <AppInput
              type="password"
              hasError={false}
              errorText="Ошибка"
              required
              placeholder="Пароль"
              {...field}
            />
          )}
        />
        <AppButton type="submit" buttonLabel="Войти"/>
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo />
    </LoginStyle>
  );
};

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import AccountLayout from "src/components/account/AccountLayout";
import LoginForm from "src/components/account/login/LoginForm";
import useLogin from "src/components/account/login/useLoginForm";
import { useAuthUserContext } from "src/hooks/contexts";
import { LoginRequest as FormData } from "src/interfaces/auth";
import { User } from "src/interfaces/user";
import AuthService from "src/services/auth.service";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuthUserContext();

  const { mutate, isLoading } = useMutation<User, unknown, FormData>({
    mutationFn: (form) => AuthService.login(form),
    onSuccess: (user) => {
      login(user);
      navigate("/product");
    },
  });

  const formik = useLogin(mutate);
  return (
    <AccountLayout title="Iniciar Sesión">
      <LoginForm formik={formik} loading={isLoading} />
    </AccountLayout>
  );
}

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import SignUpForm from "src/components/account/signup/SignUpForm";
import SignUpLayout from "src/components/account/signup/SignUpLayout";
import useSignUpForm from "src/components/account/signup/useSignUpForm";
import { useAuthUserContext } from "src/hooks/contexts";
import { SignUpRequest } from "src/interfaces/auth";
import { User } from "src/interfaces/user";
import AuthService from "src/services/auth.service";

export default function SignUp() {
  const navigate = useNavigate();
  const { setUser } = useAuthUserContext();

  const { mutate, isLoading } = useMutation<User, unknown, SignUpRequest>({
    mutationFn: (signUpForm) =>
      AuthService.signup(signUpForm),
    onSuccess: (user) => {
      setUser(user);
      navigate("/home");
    },
  });

  const formik = useSignUpForm(mutate);
  return (
    <SignUpLayout title="Crear Nueva Cuenta">
      <SignUpForm formik={formik} loading={isLoading} />
    </SignUpLayout>
  );
}

import { Button, Spinner } from "@chakra-ui/react";
import { useAuth } from "oidc-react";

export default () => {
  const auth = useAuth();

  console.log(auth.userData);

  if (auth.isLoading) {
    return <Spinner />;
  }

  if (auth && auth.userData) {
    return (
      <Button bg="red" margin={10} onClick={() => auth.signOut()}>
        Log Out
      </Button>
    );
  }

  return (
    <Button bg="green" margin={10} onClick={() => auth.signIn()}>
      Log In
    </Button>
  );
};

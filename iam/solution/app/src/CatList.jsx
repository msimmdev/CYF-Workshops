import { Alert, AlertIcon, Image, Spinner, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "oidc-react";
import Cat from "./Cat";

export default ({ subscription }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cats, setCats] = useState([]);

  const auth = useAuth();

  useEffect(() => {
    async function getCats() {
      try {
        setLoading(true);
        setError(false);

        let headers = {};
        if (auth && auth.userData && auth.userData.access_token) {
          headers = { Authorization: "Bearer " + auth.userData.access_token };
        }

        const response = await fetch(
          "http://localhost:3000/cats/" + subscription,
          { headers: headers }
        );
        if (!response.ok) {
          setError(true);
          console.error("Unable to fetch cats", response);
        }

        const jsonData = await response.json();

        setCats(jsonData);
        setLoading(false);
      } catch {
        setError(true);
      }
    }
    getCats();
  }, []);

  if (subscription === "premium" || subscription === "super-premium") {
    if (!auth || !auth.userData) {
      return (
        <Alert status="error">
          <AlertIcon />
          Please login to view these cats
        </Alert>
      );
    }
  }

  if (subscription === "super-premium") {
    if (
      !auth.userData.profile.roles ||
      !auth.userData.profile.roles.includes("CatLover")
    ) {
      return (
        <Alert status="error">
          <AlertIcon />
          You must be a cat lover to see these cats
        </Alert>
      );
    }
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        Problem loading cats
      </Alert>
    );
  }

  if (loading) {
    return <Spinner />;
  }

  const catDisplay = [];
  for (const cat of cats) {
    catDisplay.push(<Cat cat={cat} key={cat.name} />);
  }

  return <Stack>{catDisplay}</Stack>;
};

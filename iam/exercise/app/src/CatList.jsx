import { Alert, AlertIcon, Image, Spinner, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Cat from "./Cat";

export default ({ subscription }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    async function getCats() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch(
          "http://localhost:3000/cats/" + subscription
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

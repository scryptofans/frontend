import * as React from "react";

import Container from "react-bootstrap/Container";

import GameCarousel from "./carousel";

import Header from "./header";

export default function App() {
  const [games, setGames] = React.useState([]);
  React.useEffect(function () {
    if (games.length === 0) {
      fetch("/games.json")
        .then((resp) => resp.json())
        .then((json) => setGames(json));
    }
  });
  const zashcvarGames = games.filter((game: any) => game.rating >= 90);
  return (
    <Container fluid>
      <Header />
      <GameCarousel games={zashcvarGames} />
    </Container>
  );
}

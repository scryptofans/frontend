import * as React from "react";

import Carousel from "react-bootstrap/Carousel";

interface IProps {
  games: {
    image: String;
    name: String;
    translations: any;
  }[];
}
export default function GameCarousel(props: IProps) {
  return (
    <Carousel>
      {props.games.map(function (game: any) {
        return (
          <Carousel.Item key={game.id}>
            <img className="d-block w-100" src={game.image} alt={game.name} />
            <Carousel.Caption>
              <h3>{game.name}</h3>
              <p>{(game.translations.ru.description || "").slice(0, 70)}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

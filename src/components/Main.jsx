import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="main">
      <div className="item-list">
        <div className="item-list__header">
          <h2>Popular Artists</h2>
          <a className="item-list__link" href="/">
            Show all
          </a>
        </div>

        <div className="item-list__container">
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
                  alt="Henrique e Juliano"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon "
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">
                  Amo Noite E Dia - Live In Sao Paulo / 2010
                </p>
              </div>

              <p className="single-item__type">Henrique e Juliano</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab6761610000517499c26e8fb91634b00764bbb9"
                  alt="Imagem do Artista MC Tuto"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon "
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">
                  Oh Garota Eu Quero Você Só Pra Mim
                </p>
              </div>

              <p className="single-item__type">MC Tuto</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab6761610000517477937baabc49dea13c17c706"
                  alt="Imagem do Artista Jorge & Mateus"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon "
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Cantada Boba - Ao Vivo</p>
              </div>

              <p className="single-item__type">Jorge & Mateus</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174b4c07f06044ca6f1a8548192"
                  alt="Imagem do Artista NATTAN"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon "
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Última Noite</p>
              </div>

              <p className="single-item__type">NATTAN</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab676161000051747ffc3038ef5e67354ecdede1"
                  alt="Imagem do Artista Grupo Menos É Mais"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon "
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">
                  Coração Partido (Corazón Partío) - Ao Vivo
                </p>
              </div>

              <p className="single-item__type">Grupo Menos É Mais</p>
            </div>
          </div>
        </div>
      </div>

      <div className="item-list">
        <div className="item-list__header">
          <h2>Popular Songs</h2>
          <a className="item-list__link" href="/">
            Show all
          </a>
        </div>

        <div className="item-list__container">
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab676161000051747098ffe23a919f7742979c6e"
                  alt="Imagem do Artista Zé Neto & Cristiano"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon "
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Amizade Com Ex - Ao Vivo</p>
              </div>

              <p className="single-item__type">Zé Neto & Cristiano</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174b97627e4ea832ed67617627a"
                  alt="Imagem do Artista Matheus & Kauan"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon "
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Universo</p>
              </div>

              <p className="single-item__type">Matheus & Kauan</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174668a5535093f4cc53b1fef45"
                  alt="Imagem do Artista Oruam"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon "
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Diz Aí Qual é o Plano?</p>
              </div>

              <p className="single-item__type">Oruam</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174acfec0b96ba96562ad2e7fa3"
                  alt="Imagem do Artista Murilo Huff"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon "
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Peça Íntima</p>
              </div>

              <p className="single-item__type">Murilo Huff</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab6761610000517483f19000f18fbec5cf328f59"
                  alt="Imagem do Artista Hugo & Guilherme"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon "
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Mentirosa - Ao Vivo</p>
              </div>

              <p className="single-item__type">Hugo & Guilherme</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174ec1fef19ee9676f9ce662f39"
                  alt="Imagem do Artista MC LUUKY"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon "
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Malvadinho</p>
              </div>

              <p className="single-item__type">MC LUUKY</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174281fcf09827f1223ca4d729c"
                  alt="Imagem do Artista Léo Foguete"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon "
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Cópia Proibida</p>
              </div>

              <p className="single-item__type">Léo Foguete</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174dbfd9763ee6948c110999581"
                  alt="Imagem do Artista Gusttavo Lima"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon "
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">
                  A Noite (La Notte) - Ao Vivo
                </p>
              </div>

              <p className="single-item__type">Gusttavo Lima</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab676161000051744ba71e7bb7139281802eb42e"
                  alt="Imagem do Artista Nilo"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon "
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Fui Mlk</p>
              </div>

              <p className="single-item__type">Nilo</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174121da419911d33812cfd481e"
                  alt="Imagem do Artista Luan Pereira"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon "
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">UM PALMO - Ao Vivo</p>
              </div>

              <p className="single-item__type">Luan Pereira</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

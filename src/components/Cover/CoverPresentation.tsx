import "./cover.css";
import { useCoverText } from "../../hooks/useCoverText";

const coverText = "Hi there! I'm Jorge Luis";

function CoverPresentation () {
  const { text, resetValues } = useCoverText(coverText);

  return (
    <section className="cover">
      <div className="cover__container">
        <h2
          className="cover__container__text"
          onClick={() => resetValues()}
        >
          {text}
        </h2>

        <div className="cover__button__container">
          <a href="#" className="cover__button--yellow">
            get my resume
          </a>
          <a href="#" className="cover__button--blue">
            reach me out
          </a>
        </div>
      </div>
    </section>
  );
}

export default CoverPresentation;

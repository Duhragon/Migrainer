import Slider from "react-slick";
import Activities from "./Activities";
import Symptoms from "./Symptoms";
import "../../CustomCss/CustomSlick.css";
import "../../CustomCss/SlickTheme.css";
import { useSelector } from "react-redux";
import Loading from "../Loading";

function Charts() {
  const episodes = useSelector(state => state.episode.episode);
  const isLoadingEpisodes = useSelector(state => state.episode.isLoadingEpisodes);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // You can customize this as needed
    dots: true, // You can customize this as needed
  };

  return (
    <div className=" flex flex-col">
      {episodes.length === 0 && !isLoadingEpisodes ? (
        <section className="flex p-4 flex-col sm:flex-row flex-grow items-center  rounded-lg bg-bg-third sm:justify-around mx-3 my-4 sm:bg-gradient-to-r from-bg-secondary from-1% via-bg-third via-60% to-bg-third ">
          <img src="lock.png" className="animate-pulse h-32 sm:h-40" />
          <p className=" text-text-light text-sm  text-center flex flex-col py-1">
            Migraines can be disabling.
            <span className="mt-2 py-2 px-3 rounded bg-bg-hover sm:bg-opacity-0	 text-text-primary">
              Manage migraines by unlocking insights with a few episodes.
            </span>
          </p>
        </section>
      ) : (
        <section className="h-full flex-grow m-3 my-4 bg-bg-third rounded-xl">
          {isLoadingEpisodes ? (
            <div className="flex h-80 justify-center items-center">
              <Loading />
            </div>
          ) : (
            <>
              <Slider {...settings}>
                <Symptoms />
                <Activities />
              </Slider>
            </>
          )}
        </section>
      )}
    </div>
  );
}

export default Charts;

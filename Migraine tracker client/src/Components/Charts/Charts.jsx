import Slider from "react-slick";
import Activities from "./Activities";
import Symptoms from "./Symptoms";
import "../../CustomCss/CustomSlick.css";
import "../../CustomCss/SlickTheme.css";
import { useSelector } from "react-redux";

function Charts() {
  const { episodes } = useSelector(state => state.user.user);
  console.log(episodes);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // You can customize this as needed
    dots: true, // You can customize this as needed
  };

  return (
    <div className=" flex flex-col">
      {episodes.length === 0 ? (
        // Filler container in case there are no episodes
        <div className="flex flex-grow tracking-wide  items-center border-2 border-links rounded h-[12rem] justify-center  mx-3 my-6">
          <section className="text-center  h-full flex w-full flex-col justify-around">
            <div className="font-thin px-5 text-text-light">
              <h2 className="text-sm  sm:text-lg md:text-xl py-5 pb-1 sm:pb-3">
                Wouldn't it be great to have insights for your Migraine episodes?
              </h2>
              <p className="text-xs md:text-base pb-2 sm:pb-4">
                Start by selecing a date, and you'll find them right here.
              </p>
            </div>
            <p className="bg-bg-secondary px-4 py-3 text-sm sm:text-base w-full mt-auto">
              <span className="font-thin">Did you know:</span> Migraines rank as the third most prevalent illness in the
              entire world.
            </p>
          </section>
        </div>
      ) : (
        <section className="h-fit flex-grow m-3 my-4 bg-bg-third rounded-xl">
          <Slider {...settings}>
            <Symptoms />
            <Activities />
          </Slider>
        </section>
      )}
    </div>
  );
}

export default Charts;

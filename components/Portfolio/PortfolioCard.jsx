import { Link } from "react-scroll";
import Badge from "../Common/Badge";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import Image from "next/image";

const PortfolioCard = ({ data }) => {
  const book = useRef();
  var settingsWeb = {
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    autoplay: true,
  };
  return (
    <a
      href={data.url}
      target="_blank"
      className="card_stylings cursor-pointer overflow-hidden h-full transform transition duration-500 hover:scale-[1.03] hover:shadow-lg "
    >
      <Slider ref={book} {...settingsWeb}>
        {data?.image &&
          data?.image.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <div
                className={
                  "  top-0 bg-white rounded w-full mb-2 relative transform transition duration-500 hover:scale-[1.02]"
                }
              >
                {item.image && (
                  <img
                    src={item.image}
                    className="w-full object-cover   h-48 md:h-64"
                    alt={item.altTag}
                  />
                )}
              </div>
            </div>
          ))}
      </Slider>
      <div
        id="arrow"
        className="py-2 px-6 -mt-6 sm:mt-0 card_stylings sm:bg-none bg-gradient-to-r from-Green/10 via-black to-Green/10 hover:-translate-y-10 transition-all ease-in-out duration-500"
      >
        <div className="flex justify-between p-0 m-0 ">
          <h3 className="mr-2 underline italic font-semibold pt-2 text-2xl text-Snow leading-tight sm:leading-normal">
            {data?.projectName}
          </h3>
        </div>
        <p className="text-xs text-LightGray font-normal">
          {data?.description}
        </p>

        <div className="text-sm flex flex-wrap gap-3 py-2">
          {data.technologiesUsed.map((index, key) => (
            <Badge key={key} title={index} />
          ))}
        </div>
      </div>
    </a>
  );
};

export default PortfolioCard;

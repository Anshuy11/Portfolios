import Typewriter from "typewriter-effect";
import BannerLayout from "../Common/BannerLayout";

const Banner = () => {
  return (
    <BannerLayout>
      <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
        <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
          <div className="flex items-center md:items-center md:justify-around">
            <div className="">
              <div className="">
                <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold">
                  Hello, Check This Out!
                </h1>
              </div>
              <div className="">
                <div className=" py-4 font-cascadia-normal text-Snow pb-4 text-xs h-20 lg:h-auto">
                  <span>
                    {"<"}
                    <span className="text-Green sm:text-base xl:text-lg font-bold">
                      div
                    </span>
                    {">"}{" "}
                    <h2 className="text-Snow sm:text-xl xl:text-2xl font-bold">
                      {" "}
                      I am a{" "}
                      <span className="inline-block">
                        <Typewriter
                          options={{
                            strings: [
                              "ReactJs Developer",
                              "NextJs Developer",
                              "Javascript Developer",
                            ],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </span>
                    </h2>{" "}
                    {"</"}
                    <span className="text-Green sm:text-base xl:text-lg font-bold">
                      div
                    </span>
                    {">"}{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* details in row */}
        <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16">
          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold">
              3+
            </span>
            <span className="text-xs text-Snow">
              Worked on Professional Projects
            </span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold">
              10+
            </span>
            <span className="text-xs text-Snow">Personal Projects </span>
          </div>
        </div>
      </div>
    </BannerLayout>
  );
};

export default Banner;

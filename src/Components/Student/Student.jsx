import React from "react";

const Student = () => {
  return (
    <section id="student-container">
      <div className="container max-md:hidden lg:w-[970px] lg:block xl:w-[970px] 2xl:w-[1170px] text-center max-md:pt-[50px] max-md:pb-[70px] lg:pt-[50px] lg:pb-[70px] xl:pt-[10px] xl:pb-[70px] 2xl:pt-[50px] 2xl:pb-[70px]">
        <h2 className="font-lexend text-[30px] md:text-[30px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] font-semibold text-white mb-[20px]">
          Student's Testimonial
        </h2>
        <div className="flex flex-col gap-[30px]">
          <ul className="grid md:grid-cols-1 grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 gap-[30px]">
            <div className="testimonial-content">
              <div className="embed-responsive container">
                <div className="embed-responsive-16by9 border-[5px solid white]">
                  <iframe
                    className="h-[29vh] md:h-[50vh]  lg:h-[30vh] xl:h-[20vh] 2xl:h-[30vh] w-full"
                    src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0"
                    frameborder="0"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="testimonial-content">
              <div className="embed-responsive container">
                <div className="embed-responsive-16by9 border-[5px solid white]">
                  <iframe
                    className="h-[29vh] md:h-[50vh]  lg:h-[30vh] xl:h-[20vh] 2xl:h-[30vh] w-full"
                    src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0"
                    frameborder="0"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="testimonial-content">
              <div className="embed-responsive container">
                <div className="embed-responsive-16by9 border-[5px solid white]">
                  <iframe
                    className="h-[29vh] md:h-[50vh]  lg:h-[30vh] xl:h-[20vh] 2xl:h-[30vh] w-full"
                    src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0"
                    frameborder="0"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
            </div>
          </ul>
          <ul className="grid md:grid-cols-1 grid-cols-3 2xl:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-[30px]">
            <div className="testimonial-content">
              <div className="embed-responsive container">
                <div className="embed-responsive-16by9 border-[5px solid white]">
                  <iframe
                    className="h-[29vh] md:h-[50vh]  lg:h-[30vh] xl:h-[20vh] 2xl:h-[30vh] w-full"
                    src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0"
                    frameborder="0"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="testimonial-content">
              <div className="embed-responsive container">
                <div className="embed-responsive-16by9 border-[5px solid white]">
                  <iframe
                    className="h-[29vh] md:h-[50vh]  lg:h-[30vh] xl:h-[20vh] 2xl:h-[30vh] w-full"
                    src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0"
                    frameborder="0"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="testimonial-content">
              <div className="embed-responsive container">
                <div className="embed-responsive-16by9 border-[5px solid white]">
                  <iframe
                    className="h-[29vh] md:h-[50vh]  lg:h-[30vh] xl:h-[20vh] 2xl:h-[30vh] w-full"
                    src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0"
                    frameborder="0"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Student;

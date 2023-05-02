import React from "react";

export default function Background({ weather }) {
  // let weatherImg
  // if (weather.includes("cloud")) {
  //   weatherImg = `../images/cloudy.jpg`;
  // } else if (weather.includes("snow")) {
  //   weatherImg = `../images/snow.jpg`;
  // } else if (weather.includes("rain")) {
  //   weatherImg = `../images/rainy.jpg`;
  // } else if (weather.includes("storm")) {
  //   weatherImg = `../images/storm.jpg`;
  // } else if (weather.includes("sun")) {
  //   weatherImg = `../images/sunny.jpg`;
  // } else if (weather.includes("mist")) {
  //   weatherImg = `../images/misty.jpg`;
  // } else if (weather.includes("clear")) {
  //   weatherImg = `../images/clear.jpg`;
  // } else if (weather.includes("drizzle")) {
  //   weatherImg = `../images/drizzle.jpg`;
  // } else if (weather.includes("fog")) {
  //   weatherImg = `../images/foggy.jpg`;
  // } else if (weather.includes("tornado")) {
  //   weatherImg = `../images/tornado.jpg`;
  // } else {
  //   weatherImg = `..images/default.jpg`
  // }

  return (
    // <div style={{
    //   backgroundImage: `${weatherImg}`
    // }}>
    <div>
      <div>
        {weather.includes("cloud") ? (
          <div className="cloud"> </div>
        ) : (
          <div>
            {weather.includes("sun") ? (
              <div className="sun"> </div>
            ) : (
              <div>
                {weather.includes("mist") ? (
                  <div className="mist"> </div>
                ) : (
                  <div>
                    {weather.includes("fog") ? (
                      <div className="fog"> </div>
                    ) : (
                      <div>
                        {weather.includes("snow") ? (
                          <div className="snow"> </div>
                        ) : (
                          <div>
                            {weather.includes("storm") ? (
                              <div className="storm"> </div>
                            ) : (
                              <div>
                                {weather.includes("drizzle") ? (
                                  <div className="drizzle"> </div>
                                ) : (
                                  <div>
                                    {weather.includes("clear") ? (
                                      <div className="clear"> </div>
                                    ) : (
                                      <div>
                                        {weather.includes("tornado") ? (
                                          <div className="tornado"> </div>
                                        ) : (
                                          <div className = 'default'>Is this even here</div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

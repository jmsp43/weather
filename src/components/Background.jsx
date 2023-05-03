import React from "react";

export default function Background({ weather }) {
  return (
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
                                          <div>
                                            {weather.includes("rain") ? (
                                              <div className="rain"> </div>
                                            ) : (
                                              <div className="default">
                                                Is this even here
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
            )}
          </div>
        )}
      </div>
    </div>
  );
}


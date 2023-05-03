
View Here:
https://weather-jmsp43.vercel.app/


Welcome to my first React project for Per Scholas. It is a simple weather app that is responsive to screen size and provides the current weather and 5-day forecast for a zip coode of the user's choosing. 

Dependencies and Instructions

I used Bootstrap and FontAwesome to streamline my styling process, here are links to get started using them:
https://getbootstrap.com/docs/5.3/getting-started/introduction/
https://fontawesome.com/docs/web/use-with/react/

I used OpenWeatherMap as my API, utilizing both the Current Weather Data and 5-Day Forecast options. Link here: https://openweathermap.org/api
Then, create your free account and navigate to "My API keys", and create a new key. 
After that, simply make a .env file on the same level as package.json and input this line:
REACT_APP_API_KEY = 'ENTERyourUNIQUEapiKEYhere'


Motivation
I chose to create a weather application so that I could practice the basics of React and get a handle on combining my JavaScript knowledge with my newly acquired skill of fetching information from APIs. My ultimate goal is to create a (seemingly) multi-page application with inclimate weather warnings, weather-appropriate events to attend in the area, and an option to save your home weather location. 


Technologies Used
HTML, CSS, Bootstrap, JavaScript, React, Node


Achievements

I was able to accomplish some stretch goals, mainly a responsive and aesthetically pleasing design. For my first deliverable full project using React, I'm proud of myself for having a functional application at all, because it was very challenging for me, leagues beyond the first project's difficulty level. 

One feature that I'm particularly proud of is the background change with every weather type (clouds, rain, snow, clear sky, etc.). Styling is not my strong suite, but with this project I really wanted to make a huge effort with how the application looks, especially given that it isn't as fanciful and complicated as I initially hoped it would be.


Challenges/Unsolved Issues

I faced many challenges in the creation of this application, including requesting too many API calls, leading to me having to create a new account in order to get a fresh API key (more than once). Not only was this frustrating, but also terribly inconvenient as with every new API key one recieves, you have to wait an hour or two for it to become active. 

One of the times I needed to create a new API key happened because I had somehow created an infinite loop while fetching my API's information, which ran out my calls expeditiously. This is related to the unsolved issue of my Home component, which I had hoped would display a new "page" featuring only the weather and forecast of the user's home location that they previously saved with the adjacent save button. I haven't worked out the kinks ahead of this deadline to submit, however I did fix the infinite loop and there are no more errors in the console, so I am proud of the progress I have made towards that goal. 

Another issue that I haven't been able to solve as of yet is the fact that some zip codes (even though they are 5-digit numerical codes, as given by the requirements of my code) simply do not work. For example, I have tried entering several zip codes of my father's home country, Dominican Republic, to no avail. I checked that the API contains such information, but for some reason it doesn't happen in my application. I tried other places outside of the US that also have 5-digit zip codes (such as Mexico and Puerto Rico) and they work perfectly fine. (I guess this application just isn't de lo mio jaja). Going forward, I am looking into changing my API fetch from relying on zip codes to city name, as it would be more inclusive for countries that have alternative zip codes with letters and assorted lengths. 


Future Features

-link to inclimate weather warnings "page" with listings of possible storms, power outages, etc in the area inputted
- link to weather-appropriate events "page" to attend in the area inputted
- (this is already a work in progress) an option to save and view your home weather
-(this is already a work in progress) a landing "page" for when a user enters an invalid zip code
- possible change from zip code reliance to city name reliance


Acknowledgements
Big thank yous to everyone who helped me along the way!

Thank you to Kasper, Tishana, and Dylan for your patience and support! 
Thank you to Imani, Tamara, and Daria for after class trouble shooting chats.
Thank you to Joshua, Yonas, and Anuja for help with bug fixes, ideas to work around API issues, and general tips!
Thank you to PedroTech on Youtube for laying down foundational knowledge of React practices.
Thanks to Unsplash.com for free, high quality images!


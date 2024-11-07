# Weather App

UI (front end) for Weather App

## How to run with backend end

1. clone both repositories down (make sure they are in the same parent folder)
1. navigate into this folder (the front end - weather-app))
1. run `npm run build`
1. navigate into the backend folder (weather-api)
1. update the copose.yml file with your API tokens for the weather service (see API Used section for details)
1. run `docker compose up --build` (should run on localhost:3000)

## Design Pattern Explanation

I have found that using a Flux pattern even when not implementing Redux has been the easiest way to keep a clean and understandable state with contexts BUT since there was very little to no business logic i didn't really need to implement a context as react query was holding all my data when using useQuery it can perform similar to a context as long as your keys are the same... HOWEVER it can definitely be used in a context if that is the prefered way to pass down data especially when mixed with more business logic or layout state.

I did implement 1 context with a reducer for an example of how that could look the react query call COULD also be used in a context but isn't a common pattern as it is slightly uncessary and redundant for most use cases. In theory youd prob pick one way to implement but wanted to show a couple options.

I mentioned this in a few places but i would usually have smaller states per section of the app and build my endpoints around the necessary data and nothing exta but do to the API constraints and time constraints I just have 1 larger state and 1 API call

## Things I would love to add

- fix the aliases - this is driving me NUTS but my aliases weren't working and I just didn't have time to mess with it to fix it
- Implement a user creation and login and allow them to have multiple locations and they can have settings they can update to set unit type, language, and time settings - this would also keep their state on refresh since we would be getting data saved on the user instead of input
- I would love to change the background or something by time of day and/weather
- Implement a search that allows for a dropdown of all possible places by text, zip, or lon lat with a options dropdown instead of making them specifically put in a zipcode (global not just US)
- Update to use better icons
- Implement TS - would make some check unecessary and may make the code a bit cleaner was just faster for me to do it in JS
- Add tests
- Finish implementing lazy loading
- Finish implementing husky

## Other Considerations

- The icons for hourly won't work locally because of CORS
- if you are on a mac the new chrome auto scroll bars are weird the hourly section does scroll if you hold shift and scroll while hovered over it and then the scroll bars will show

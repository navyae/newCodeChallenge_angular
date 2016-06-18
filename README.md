# newCodeChallenge_angular

This repo is derived from the official angular 2 documentation : https://angular.io/docs/ts/latest/quickstart.html

=> All Typescript files are inside dev/ folder 
=> These Typescript files for various components are compiled into app/ folder
=>assets/ folder includes stylesheets (i.e SCSS code) and are compiled in to src/ folder as css
=> SystemJS builder manages the building of typescript
=>Gulp manages the code compilation
=> To start server : npm start



About Components:

NearByBlocks.component.ts -> includes the code for right side block (i.e. nearby Tiles)

Title.component.ts -> includes the code for the title of the amenities module

TopRanking.component.ts -> includes the code for left side block (i.e higher rated amenities section). This component also calls the service (i.e. created in services/getService.service.ts) for data binding 

getService.service.ts -> This is a service that uses injectable and observables to get the JSON data from the given API

bottomList.component.ts -> includes code for bottom amenities list in the left side block. this is the child component for TopRanking.component.ts

app.component.ts -> Parent component for all the components specified above. This is the initial component that boots

boot.ts -> use bootstrap to render initial components.



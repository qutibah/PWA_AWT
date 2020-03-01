# Project Advanced Web Technologies

<img src="https://blog.jscrambler.com/content/images/2016/12/electron_react1.png" alt="Electron React" align="center" />

<br />
<br />

<div align="center"><strong>Progressive Web App build with React + Electron = ❤️</strong></div>
<br />


## Tech Stack

* React 16
* Electron
* React Router
* Styled Components
* Bootstrap
* Webpack

## Functional Requirements (FR)

Develop an interoperable PWA for media playback, which includes a catalogue and media player (e.g. dash.js or shaka-player)
* Work in major browser and UI/UX adjustment (cross-browser capabilities):
  * Offline functionality.
  * Navigation menu (hamburger icon, download button).  
* Download functionality for DASH (MPD + segments):
  * Download page (playlist).
  * Progress information.
  * Representation selection (SD, HD, Audio, TextTracks).
* Integration into existing HTML5 player (shaka, dash.js):
  * Playback of stored content (offline).
  * Network bandwith selection (network-agnostic).
* Additional features:
  * Push notification (Web Push).
  * Work with mobile device (device-agnostic).
  * Work with Electron player.

## Non-funtional Requirements (NFR)
* Storage management (e.g. cache, listing, removal):
  * Data store for client purpose using IndexedDB (e.g. cache offline resources portal & player).
  * LocalStorage implementing Quota Management API to query free space.
  * Node WebSQL using NodeJS (File System).



## Getting started

To install all the dependencies run.

`npm install` or `yarn`

To launch the application as a React Web Application run

`yarn start` or `npm start`

To launch the electron application run

`yarn electron-dev` or `npm run electron-dev`.

## Build

For a production build for the web application run `yarn build` or `npm run build`.

## Resources

* Video for mobile devices (testng):
https://drive.google.com/file/d/1WqeXq98gVYTbIJuRp3l9Rp6J1H-LWeME/view

#### Electron

* https://github.com/electron/electron-api-demos
* https://electronjs.org/docs/tutorial/online-offline-events
* https://electronjs.org/docs/tutorial/using-widevine-cdm-plugin

#### Progressive Web App

* https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/offline-for-pwa

* https://github.com/GoogleChromeLabs/sample-media-pwa

### Reference Player for DASH

* http://v1-6-2.shaka-player-demo.appspot.com/docs/tutorial-offline.html
* http://reference.dashif.org/dash.js/
* https://github.com/google/shaka-player/blob/master/docs/design/offline.md
* https://shaka-player-demo.appspot.com/docs/api/tutorial-basic-usage.html

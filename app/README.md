# JavaScript tech stack
Stack based on

* [React.js](https://reactjs.org/) - to composite the user interface
* [Redux](http://redux.js.org/) - for managing client state
* [React Router](https://reacttraining.com/react-router/) - to respect URLs
* [Filestack React](https://github.com/filestack/filestack-react) - to record and store videos

## Responsive design

The app is designed for mobile first using:
* [vw/Viewport width](https://developer.mozilla.org/en-US/docs/Web/CSS/length#vw) - to set the root font size based on screen width
* [rem/Root element](https://developer.mozilla.org/en-US/docs/Web/CSS/length#rem) - to scale the dom elements


## Prerequisites
```
brew install node npm
npm install -g yarn
yarn install
```

## Deployment
`cd .. && ./deploy_app_to_server.sh`

## Local development
`yarn start`

## Configure
This project is bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). For further configuration see its [README](https://github.com/facebookincubator/create-react-app/blob/master/README.md) or perform a `yarn eject` and take it from there.

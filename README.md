# React With Mocks
- From Create React App CLI:
- Can Mock Api with MSW interceptor for testing. 
  - Visit `src/mocks/handlers.js` to see local endpoints dev server will call.
  - In production environment, it should include the mock files and should point to a propert api. (See `.env.production` - `REACT_APP_API_URL` for environment variable for api domain.)
    - Note: There is no live production server so expect app to explode since a real `https://api.production.com` is not configured for this app.

## Install
- Run `npm ci` to install dependencies
- Node engine version was at `v22.9.0`

## Start Serve
- Run `npm run start:dev` to run dev serve. (See `package.json` scripts for dev/prod options for `serve/build`)

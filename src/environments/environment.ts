// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBF8iNF_xYbKQK2umQgiBkex8c3Iprw3GA",
    authDomain: "booknotes-12637.firebaseapp.com",
    databaseURL: "https://booknotes-12637.firebaseio.com",
    projectId: "booknotes-12637",
    storageBucket: "booknotes-12637.appspot.com",
    messagingSenderId: "676032779118"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

import './config/firebase'
import RootNavigation from './navigation/index';
import AuthStack from './navigation/authStack';
import CampaignFinal from './NpoPages/campaignFinal';

export default function App() {
  return (
 <  AuthStack/>

 
  )

}


 // "extra": {
    //   firebaseApiKey: process.env.FIREBASE_API_KEY,
    //   firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
    //   firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
    //   firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    //   firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    //   firebaseAppId: process.env.FIREBASE_APP_ID
    // }
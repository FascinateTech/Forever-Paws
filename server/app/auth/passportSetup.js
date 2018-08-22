import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { FacebookStrategy } from 'passport-facebook';
import { createOrFetchUser, getUserByGoogleId, createOrFindUser } from '../../../db/users/user';

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL,
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  FACEBOOK_CALLBACK_URL,
} = process.env.NODE_ENV === 'production' ? process.env : require('../../../config/config');

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
    },
    createOrFetchUser
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: FACEBOOK_CALLBACK_URL,
    },
    createOrFindUser
  )
);
passport.serializeUser((user, done) => done(null, user.googleId));

passport.deserializeUser(getUserByGoogleId);

export default passport;

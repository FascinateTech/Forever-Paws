import { Router } from 'express';
import passport from './passportSetup';

const facebook = Router();

facebook.get('/callback', passport.authenticate('google', { failureRedirect: '/', successRedirect: '/pets' }));

export default facebook;

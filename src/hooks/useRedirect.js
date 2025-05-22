import axios from "axios";
import { useEffect } from "react";
import { useHistory,useLocation } from 'react-router';
import { useCurrentUser } from '../contexts/CurrentUserContext';

export const useRedirect = (userAuthStatus) => {
    const history = useHistory();
    const location = useLocation();
    const currentUser = useCurrentUser();
    const homepage = ['/'].includes(history.location.pathname);

    useEffect(() => {
        const authPages = ['/signin', '/signup'];
        
        const handleMount = async () => {
              // if user is logged in and on signin/signup page, redirect to profile page
              if (authPages.includes(location.pathname) || homepage) {
                if (userAuthStatus === 'loggedIn' && currentUser) {
                  history.push('posts');
                  return;
                }
                if (userAuthStatus === 'loggedOut') {
                  return;
                }
              }
              try {
                await axios.post('/dj-rest-auth/token/refresh/');
                // if user is logged in, the code below will run
                if (userAuthStatus === 'loggedIn') {
                    history.push('/');
                }
              } catch (err){
                // if user is not logged in, the code below will run
                if (userAuthStatus === 'loggedOut') {
                    if (location.pathname !== '/contact/create') {
                      history.push('/posts');
                    }
                }
              }
            };
        
            handleMount();
          }, [history, userAuthStatus, currentUser, location.pathname, homepage]);
        };
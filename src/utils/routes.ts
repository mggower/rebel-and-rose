import { matchPath } from 'react-router-dom'

export enum RoutePath {
  HOME = '/',
  SALON = '/salon',
  SPA = '/spa',
  ABOUT = '/about',
  CONTACT = '/contact',
  TALENT = '/talent',
  POLICIES = '/policies',
}

export default {
  // internal links
  home: RoutePath.HOME,
  salon: RoutePath.SALON,
  spa: RoutePath.SPA,
  about: RoutePath.ABOUT,
  contact: RoutePath.CONTACT,
  talent: RoutePath.TALENT,
  policies: RoutePath.POLICIES,

  // external links
  booker: 'https://go.booker.com/location/ReviveSpaMA/service-menu',
  giftCard: 'https://go.booker.com/location/revivespama/buy',

  // route matching
  match: function matchRoute(route: RoutePath, pathname: string) {
    return matchPath(route, pathname) !== null
  },

  // available routes
  list: [
    { route: RoutePath.HOME, label: 'Home' },
    { route: RoutePath.SALON, label: 'Salon' },
    { route: RoutePath.SPA, label: 'Spa' },
    { route: RoutePath.ABOUT, label: 'About' },
    { route: RoutePath.TALENT, label: 'Talent' },
    { route: RoutePath.CONTACT, label: 'Contact' },
    { route: RoutePath.POLICIES, label: 'Policies' },
  ],
}

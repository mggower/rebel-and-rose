import { matchPath } from 'react-router-dom'

export enum RoutePath {
  HOME = '/',
  SALON = '/salon',
  SPA = '/spa',
  ABOUT = '/about',
  CONTACT = '/contact',
  TEAM = '/team',
  POLICIES = '/policies',
}

export default {
  home: RoutePath.HOME,
  salon: RoutePath.SALON,
  spa: RoutePath.SPA,
  about: RoutePath.ABOUT,
  contact: RoutePath.CONTACT,
  team: RoutePath.TEAM,
  policies: RoutePath.POLICIES,
  match: function matchRoute(route: RoutePath, pathname: string) {
    return matchPath(route, pathname) !== null
  },
  list: [
    { route: RoutePath.SALON, label: 'Salon' },
    { route: RoutePath.SPA, label: 'Spa' },
    { route: RoutePath.ABOUT, label: 'About' },
    { route: RoutePath.TEAM, label: 'Team' },
    { route: RoutePath.CONTACT, label: 'Contact' },
    { route: RoutePath.POLICIES, label: 'Policies' },
  ],
}

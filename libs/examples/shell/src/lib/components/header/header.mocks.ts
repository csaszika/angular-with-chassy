import { HeaderLink } from '@whf/scaffold/models';

export const headerLinks: () => HeaderLink[] = () => [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Games',
    url: '/games',
  },
  {
    text: 'Offers',
    url: '/promotions',
  },
  {
    text: 'VIP',
    url: '/vip',
  },
  {
    text: 'Payment Options',
    url: '/payment-methods',
  },
];

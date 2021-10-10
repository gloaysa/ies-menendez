import { PageItem } from './page-item.interface';

export const pageItemContent: PageItem[] = [
  {
    title: 'Inicio',
    url: 'home',
    active: false,
    content: `<img alt='under construction' src='/assets/images/old_school/under_construction.gif'>`
  },
  {
    title: 'El Instituto',
    url: 'about-us',
    active: false,
    content: `<img alt='under construction' src='/assets/images/old_school/under_construction.gif'>`
  },
  {
    title: 'Noticias',
    url: 'news',
    active: false,
    content: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante tortor, accumsan facilisis semper ac, mollis vitae justo. Nam aliquet lacus a ligula tincidunt, quis dignissim justo porttitor. Nulla non mauris molestie orci tempor scelerisque. Donec lacinia risus ac aliquam convallis. Integer feugiat, tellus et mattis posuere, metus orci fermentum dolor, sed eleifend nisl orci id justo. Fusce eu ante ullamcorper, sagittis sapien vel, sagittis dui. Nullam in interdum neque, id bibendum enim. Duis laoreet eleifend velit. Curabitur sed urna lorem. Aliquam aliquam ullamcorper est nec varius. Cras eget pretium mauris. Ut sed porta nibh. Phasellus sed lacinia eros. Cras blandit nulla ac scelerisque porta. Sed non dapibus nunc. Vivamus eget augue vitae augue laoreet pharetra in vel tortor.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis egestas justo, a ornare nisi. Nunc interdum facilisis metus sed pharetra. Donec feugiat dui nec eleifend tincidunt. Curabitur nec placerat sapien. Morbi vitae neque nunc. Aenean laoreet arcu consectetur odio elementum, at aliquam ex lobortis. Curabitur sollicitudin ultrices massa, in vestibulum felis dignissim eget. Sed varius justo quis dictum facilisis. Morbi in turpis eu odio convallis euismod. Nullam volutpat metus id leo porttitor, vitae venenatis ipsum imperdiet. Proin malesuada ac ex nec rutrum.
    `
  },
];

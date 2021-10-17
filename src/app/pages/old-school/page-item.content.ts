import { PageItem } from './page-item.interface';

export const pageItemContent: PageItem[] = [
  {
    title: 'Home',
    url: 'home',
    active: false,
    content: `<img alt='under construction' src='/assets/images/old_school/under_construction.gif'>`,
  },
  {
    title: 'Our School',
    url: 'about-us',
    active: false,
    content: `<img alt='under construction' src='/assets/images/old_school/under_construction2.gif'>`,
  },
  {
    title: 'News',
    url: 'news',
    active: false,
    content: `
      <div class='content'>
        <h1>The second floor has been closed</h1>
        <div class='content-text'>
          <img src='/assets/images/old_school/warning-sign-generator.gif'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante tortor, accumsan facilisis semper ac, mollis vitae justo. Nam aliquet lacus a ligula tincidunt, quis dignissim justo porttitor. Nulla non mauris molestie orci tempor scelerisque. Donec lacinia risus ac aliquam convallis. Integer feugiat, tellus et mattis posuere, metus orci fermentum dolor, sed eleifend nisl orci id justo. Fusce eu ante ullamcorper, sagittis sapien vel, sagittis dui. Nullam in interdum neque, id bibendum enim. Duis laoreet eleifend velit. Curabitur sed urna lorem. Aliquam aliquam ullamcorper est nec varius. Cras eget pretium mauris. Ut sed porta nibh. Phasellus sed lacinia eros. Cras blandit nulla ac scelerisque porta. Sed non dapibus nunc. Vivamus eget augue vitae augue laoreet pharetra in vel tortor.
           </p>
        </div>

       </div>
    `,
  },
  {
    title: 'Activities',
    url: 'activities',
    active: false,
    content: ``,
  },
];

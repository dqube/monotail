import { MenuItem } from '@app/ui/sidebar';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'MAIN',
      separator: false,
      items: [
        {
          icon: 'dashboard',
          label: 'Dashboard',
          route: '/auth/list',
          active: true,
          expanded: true,
          children: [
            {
              label: 'booking',
              route: '/auth/list',
              expanded: true,
              active: true,
            },
          ],
        },
        {
          icon: 'general',
          label: 'General',
          route: '/auth/detail',
        },
        {
          icon: 'components',
          label: 'Components',
          route: '/users',
        },
        {
          icon: 'elements',
          label: 'Elements',
          route: '/documents',
        },
        {
          icon: 'components',
          label: 'Applications',
          route: '/applications',
        },
        {
          icon: 'general',
          label: 'Pages',
          route: '/pages',
        },
        {
          icon: 'elements',
          label: 'Auth',
          route: '/pages',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
          ],
        },
      ],
    },
    {
      group: 'General',
      separator: true,
      items: [
        {
          icon: 'dashboard',
          label: 'Download',
          route: '/download',
        },
        {
          icon: 'general',
          label: 'Gift Card',
          route: '/gift',
        },
        {
          icon: 'components',
          label: 'Users',
          route: '/users',
        },
      ],
    },
    {
      group: 'Config',
      separator: false,
      items: [
        {
          icon: 'dashboard',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'general',
          label: 'Notifications',
          route: '/gift',
        },
        {
          icon: 'components',
          label: 'Folders',
          route: '/folders',
          children: [
            { label: 'Current Files', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },
      ],
    },
  ];
}

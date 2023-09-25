export interface MenuItem {
  link: string;
  icon: string;
  label: string;
}

export const menuItems: MenuItem[] = [
  {
    link: '/dashboard',
    icon: 'fa-chart-line',
    label: 'Dashboard',
  },
  {
    link: '/courses',
    icon: 'fa-graduation-cap',
    label: 'Cursos',
  },
  {
    link: '/teachers',
    icon: 'fa-person-chalkboard',
    label: 'Professores',
  },
  {
    link: '/students',
    icon: 'fa-chalkboard-user',
    label: 'Alunos',
  },
  {
    link: '/support',
    icon: 'fa-headset',
    label: 'Suporte',
  },
];

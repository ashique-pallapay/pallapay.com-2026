const map: Record<string, string> = {
  home: '/',
  'profile.edit': '/profile/edit',
  logout: '/logout',
  'profile.destroy': '/profile',
};

export default function route(name: string) {
  return map[name] ?? name;
}

// expose globally for legacy calls
(globalThis as any).route = route;

export const NAV_BAR_HEIGHT = 60; // px

export interface NavItem {
  label: string;
  href: string;
}

export enum NavigationIds {
  HOW_I_WORK = 'how-i-work',
  RANDOM_FACTS_ABOUT_ME = 'random-facts-about-me',
}

export const NavigationAnchors = {
  HOW_I_WORK: `anchor-${NavigationIds.HOW_I_WORK}`,
  RANDOM_FACTS_ABOUT_ME: `anchor-${NavigationIds.RANDOM_FACTS_ABOUT_ME}`,
};

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'How I work',
    href: `/#${NavigationAnchors.HOW_I_WORK}`,
  },
  {
    label: 'Random facts about me',
    href: `/#${NavigationAnchors.RANDOM_FACTS_ABOUT_ME}`,
  },
];

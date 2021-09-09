export const NAV_BAR_HEIGHT = 60; // px

export interface NavItem {
  label: string;
  href: string;
}

export enum NavigationIds {
  HOME = 'home',
  INTRO = 'intro',
  HOW_I_WORK = 'how-i-work',
  RANDOM_FACTS_ABOUT_ME = 'random-facts-about-me',
}

export const SECTION_APPENDIX = '-section';

export const SectionIds = {
  HOME: NavigationIds.HOME.concat(SECTION_APPENDIX),
  INTRO: NavigationIds.INTRO.concat(SECTION_APPENDIX),
  HOW_I_WORK: NavigationIds.HOW_I_WORK.concat(SECTION_APPENDIX),
  RANDOM_FACTS_ABOUT_ME: NavigationIds.RANDOM_FACTS_ABOUT_ME.concat(SECTION_APPENDIX),
};

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: `/#${NavigationIds.HOME}`,
  },
  {
    label: 'Intro',
    href: `/#${NavigationIds.INTRO}`,
  },
  {
    label: 'How I work',
    href: `/#${NavigationIds.HOW_I_WORK}`,
  },
  {
    label: 'Random facts',
    href: `/#${NavigationIds.RANDOM_FACTS_ABOUT_ME}`,
  },
];

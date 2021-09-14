export const NAV_BAR_HEIGHT = 60; // px

export enum NavigationIds {
  HOME = 'home',
  INTRO = 'intro',
  HOW_I_WORK = 'how-i-work',
  RANDOM_FACTS_ABOUT_ME = 'random-facts-about-me',
  PROJECTS = 'projects',
  STUFF_I_LIKE = 'stuff-i-like', // reflects page name
}

export const SECTION_APPENDIX = '-section';

export const SectionIds = {
  HOME: NavigationIds.HOME.concat(SECTION_APPENDIX),
  INTRO: NavigationIds.INTRO.concat(SECTION_APPENDIX),
  HOW_I_WORK: NavigationIds.HOW_I_WORK.concat(SECTION_APPENDIX),
  RANDOM_FACTS_ABOUT_ME: NavigationIds.RANDOM_FACTS_ABOUT_ME.concat(SECTION_APPENDIX),
  PROJECTS: NavigationIds.PROJECTS.concat(SECTION_APPENDIX),
};

export const LAST_NAV_ITEM = SectionIds.PROJECTS; // TODO: update this when adding more sections

export interface NavItem {
  label: string;
  href: string;
}

export const INTERNAL_NAV_ITEMS: Array<NavItem> = [
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
  {
    label: 'Projects',
    href: `/#${NavigationIds.PROJECTS}`,
  },
];

export const EXTERNAL_NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Stuff I like',
    href: `/${NavigationIds.STUFF_I_LIKE}`,
  },
];

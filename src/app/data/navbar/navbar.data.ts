import {
  NavbarCategoryConfig,
  NavbarFeatureItemConfig,
  NavbarResourceItemConfig,
  NavbarSupportItemConfig,
} from './navbar.model';

export const NAVBAR_CATEGORIES: readonly NavbarCategoryConfig[] = [
  { id: 'hr', labelKey: 'UNIVERSAL.NAVBAR.CATEGORIES.HR' },
  { id: 'attendance', labelKey: 'UNIVERSAL.NAVBAR.CATEGORIES.ATTENDANCE' },
  { id: 'leave-overtime', labelKey: 'UNIVERSAL.NAVBAR.CATEGORIES.LEAVE_OVERTIME' },
  { id: 'payroll-tax', labelKey: 'UNIVERSAL.NAVBAR.CATEGORIES.PAYROLL_TAX' },
];

export const NAVBAR_FEATURES: readonly NavbarFeatureItemConfig[] = [
  {
    id: 'recruitment',
    titleKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.RECRUITMENT.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.RECRUITMENT.DESC',
    route: '/feature/recruitment',
    domain: 'hr',
    icon: 'recruitment',
  },
  {
    id: 'attendance',
    titleKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.ATTENDANCE.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.ATTENDANCE.DESC',
    route: '/feature/attendance',
    domain: 'attendance',
    icon: 'attendance',
  },
  {
    id: 'payroll',
    titleKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.PAYROLL.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.PAYROLL.DESC',
    route: '/feature/payroll',
    domain: 'payroll-tax',
    icon: 'payroll',
  },
  {
    id: 'database',
    titleKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.DATABASE.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.DATABASE.DESC',
    route: '/feature/database',
    domain: 'hr',
    icon: 'database',
  },
  {
    id: 'personal-leave',
    titleKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.PERSONAL_LEAVE.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.PERSONAL_LEAVE.DESC',
    route: '/feature/personal-leave',
    domain: 'leave-overtime',
    icon: 'personal-leave',
  },
  {
    id: 'personal-overtime',
    titleKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.PERSONAL_OVERTIME.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.PERSONAL_OVERTIME.DESC',
    route: '/feature/personal-overtime',
    domain: 'leave-overtime',
    icon: 'personal-overtime',
  },
  {
    id: 'employee-update',
    titleKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.EMPLOYEE_UPDATE.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.EMPLOYEE_UPDATE.DESC',
    route: '/feature/employee-update',
    domain: 'hr',
    icon: 'employee-update',
  },
  {
    id: 'personal-attendance',
    titleKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.PERSONAL_ATTENDANCE.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.PERSONAL_ATTENDANCE.DESC',
    route: '/feature/personal-attendance',
    domain: 'attendance',
    icon: 'personal-attendance',
  },
  {
    id: 'collective-leave',
    titleKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.COLLECTIVE_LEAVE.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.COLLECTIVE_LEAVE.DESC',
    route: '/feature/collective-leave',
    domain: 'leave-overtime',
    icon: 'collective-leave',
  },
  {
    id: 'collective-overtime',
    titleKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.COLLECTIVE_OVERTIME.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.COLLECTIVE_OVERTIME.DESC',
    route: '/feature/collective-overtime',
    domain: 'leave-overtime',
    icon: 'collective-overtime',
  },
  {
    id: 'attendance-machine',
    titleKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.ATTENDANCE_MACHINE.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.ATTENDANCE_MACHINE.DESC',
    route: '/feature/attendance-machine',
    domain: 'attendance',
    icon: 'attendance-machine',
  },
  {
    id: 'yearly-tax',
    titleKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.YEARLY_TAX.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.FEATURES_MENU.ITEMS.YEARLY_TAX.DESC',
    route: '/feature/yearly-tax',
    domain: 'payroll-tax',
    icon: 'yearly-tax',
  },
];

export const NAVBAR_RESOURCES: readonly NavbarResourceItemConfig[] = [
  {
    id: 'about',
    titleKey: 'UNIVERSAL.NAVBAR.RESOURCES_MENU.ITEMS.ABOUT.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.RESOURCES_MENU.ITEMS.ABOUT.DESC',
    route: '/about-pisi',
    iconType: 'about',
  },
  {
    id: 'strategy',
    titleKey: 'UNIVERSAL.NAVBAR.RESOURCES_MENU.ITEMS.STRATEGY.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.RESOURCES_MENU.ITEMS.STRATEGY.DESC',
    route: '/strategy-implementation',
    iconType: 'strategy',
  },
  {
    id: 'customers',
    titleKey: 'UNIVERSAL.NAVBAR.RESOURCES_MENU.ITEMS.CUSTOMERS.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.RESOURCES_MENU.ITEMS.CUSTOMERS.DESC',
    route: '/our-customers',
    iconType: 'customers',
  },
  {
    id: 'contact',
    titleKey: 'UNIVERSAL.NAVBAR.RESOURCES_MENU.ITEMS.CONTACT.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.RESOURCES_MENU.ITEMS.CONTACT.DESC',
    route: '/contact-us',
    iconType: 'contact',
  },
];

export const NAVBAR_SUPPORTS: readonly NavbarSupportItemConfig[] = [
  {
    id: 'software-implementation',
    titleKey: 'UNIVERSAL.NAVBAR.SUPPORT_MENU.ITEMS.SOFTWARE_IMPLEMENTATION.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.SUPPORT_MENU.ITEMS.SOFTWARE_IMPLEMENTATION.DESC',
    route: '/',
    fragment: 'solution',
    iconType: 'software-implementation',
  },
  {
    id: 'training',
    titleKey: 'UNIVERSAL.NAVBAR.SUPPORT_MENU.ITEMS.TRAINING.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.SUPPORT_MENU.ITEMS.TRAINING.DESC',
    route: '/training-implementation',
    iconType: 'training',
  },
  {
    id: 'customize',
    titleKey: 'UNIVERSAL.NAVBAR.SUPPORT_MENU.ITEMS.CUSTOMIZE.TITLE',
    descKey: 'UNIVERSAL.NAVBAR.SUPPORT_MENU.ITEMS.CUSTOMIZE.DESC',
    route: '/customize-module',
    iconType: 'customize',
  },
];

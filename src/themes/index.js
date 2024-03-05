import { css } from 'styled-components';
import { BASE_COLORS } from '../constants/theme';
import { lightColorsTheme } from './lightTheme';
import { darkColorsTheme, antDarkColorsTheme } from './darkTheme';

export const themeObject = {
  dark: lightColorsTheme,
  light: darkColorsTheme
};

export const antThemeObject = {
  dark: {},
  light: antDarkColorsTheme
};

const getThemeVariables = (theme) => css`
  color-scheme: ${theme};
  --primary-color: ${themeObject[theme].primary};
  --primary1-color: ${themeObject[theme].primary1};
  --primary-gradient-color: ${themeObject[theme].primaryGradient};
  --info-color: var(--primary-color);
  --secondary-color: ${themeObject[theme].secondary};
  --error-color: ${themeObject[theme].error};
  --warning-color: ${themeObject[theme].warning};
  --success-color: ${themeObject[theme].success};
  --background-color: ${themeObject[theme].background};
  --secondary-background-color: ${themeObject[theme].secondaryBackground};
  --secondary-background-selected-color: ${themeObject[theme].secondaryBackgroundSelected};
  --additional-background-color: ${themeObject[theme].additionalBackground};
  --collapse-background-color: ${themeObject[theme].collapseBackground};
  --timeline-background-color: ${themeObject[theme].timelineBackground};
  --spinner-base-color: ${themeObject[theme].spinnerBase};
  --sider-background-color: ${themeObject[theme].siderBackground};
  --shadow-color: ${themeObject[theme].shadow};
  --border-color: ${themeObject[theme].border};
  --border-nft-color: ${themeObject[theme].borderNft};
  --scroll-color: ${themeObject[theme].scroll};

  --text-main-color: ${themeObject[theme].textMain};
  --text-light-color: ${themeObject[theme].textLight};
  --text-superLight-color: ${themeObject[theme].textSuperLight};
  --text-secondary-color: ${themeObject[theme].textSecondary};
  --text-dark-color: ${themeObject[theme].textDark};
  --text-nft-light-color: ${themeObject[theme].textNftLight};
  --text-sider-primary-color: ${themeObject[theme].textSiderPrimary};
  --text-sider-secondary-color: ${themeObject[theme].textSiderSecondary};
  --subtext-color: ${themeObject[theme].subText};

  --dashboard-map-background-color: ${themeObject[theme].dashboardMapBackground};
  --dashboard-map-circle-color: ${themeObject[theme].dashboardMapCircleColor};
  --dashboard-map-control-disabled-background-color: ${themeObject[theme].dashboardMapControlDisabledBackground};

  --notification-success-color: ${themeObject[theme].notificationSuccess};
  --notification-primary-color: ${themeObject[theme].notificationPrimary};
  --notification-warning-color: ${themeObject[theme].notificationWarning};
  --notification-error-color: ${themeObject[theme].notificationError};

  --icon-color: ${themeObject[theme].icon};
  --icon-hover-color: ${themeObject[theme].iconHover};
  --box-shadow: ${themeObject[theme].boxShadow};
  --box-shadow-hover: ${themeObject[theme].boxShadowHover};
  --box-shadow-nft-color: ${themeObject[theme].boxShadowNft};
  --box-shadow-nft-secondary-color: ${themeObject[theme].boxShadowNftSecondary};

  --heading-color: ${themeObject[theme].heading};
  --item-hover-bg: ${themeObject[theme].itemHoverBg};
  --background-base-color: ${themeObject[theme].backgroundColorBase};
  --border-base-color: ${themeObject[theme].borderBase};
  --disabled-color: ${themeObject[theme].disable};
  --disabled-bg-color: ${themeObject[theme].disabledBg};
  --layout-body-bg-color: ${themeObject[theme].layoutBodyBg};
  --layout-header-bg-color: ${themeObject[theme].layoutHeaderBg};
  --layout-sider-bg-color: ${themeObject[theme].layoutSiderBg};
  --input-placeholder-color: ${themeObject[theme].inputPlaceholder};
  --avatar-bg: ${themeObject[theme].avatarBg};
  --alert-text-color: ${themeObject[theme].alertTextColor};
  --breadcrumb-color: ${themeObject[theme].breadcrumb};
`;

export const lightThemeVariables = css`
  ${getThemeVariables('light')}
`;

export const darkThemeVariables = css`
  ${getThemeVariables('dark')}
  --ant-success-color-deprecated-bg: ${antThemeObject['dark'].successBg} !important;
  --ant-success-color-deprecated-border: ${antThemeObject['dark'].successBorder} !important;
`;

export const commonThemeVariables = css`
  color-scheme: light dark;
  --white: ${BASE_COLORS.white};
  --black: ${BASE_COLORS.black};
  --green: ${BASE_COLORS.green};
  --orange: ${BASE_COLORS.orange};
  --gray: ${BASE_COLORS.gray};
  --lightgrey: ${BASE_COLORS.lightgrey};
  --violet: ${BASE_COLORS.violet};
  --lightgreen: ${BASE_COLORS.lightgreen};
  --pink: ${BASE_COLORS.pink};
  --blue: ${BASE_COLORS.blue};
  --skyblue: ${BASE_COLORS.skyblue};
  --red: ${BASE_COLORS.red};
`;

export const antOverrideCssVariables = css`
  --ant-primary-1: var(--primary1-color) !important;
`;
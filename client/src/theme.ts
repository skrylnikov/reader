const themeMap = {
  light: {
    colors: {
      mainBg: 'rgb(255, 255, 255)',
      pageBg: 'rgb(245, 248, 250)', 
    },
  },
};

export const getTheme = (theme: keyof typeof themeMap) => themeMap[theme];

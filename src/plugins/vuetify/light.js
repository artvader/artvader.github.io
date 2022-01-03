// src/plugins/vuetify/theme.js
import colors from 'vuetify/lib/util/colors'
// import colors from 'vuetify/lib/util/colors'

export default {
  primary: {
    base: colors.red.base,
    darken1: colors.red.darken2,
  },
  secondary: colors.indigo,
  // All keys will generate theme styles,
  // Here we add a custom `tertiary` color
  tertiary: colors.blue.base,
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107',
  anchor: '#ff9200',
}
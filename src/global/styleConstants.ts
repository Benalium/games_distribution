const primaryColor = {
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#1f87e5',
  800: '#1765c0',
} as const

type BasicTheme = {
  readonly [key in '1' | '2' | '3' | '4' | '8']: string
}

const basicThemes: {
  [key in 'light' | 'dark']: BasicTheme
} = {
  light: {
    1: '#ffffff',
    2: '#fafafa',
    3: '#f5f5f5',
    4: '#f0f0f0',
    8: '#3c3c3c'
  },
  dark: {
    1: '#000000',
    2: '#000000',
    3: '#000000',
    4: '#000000',
    8: '#3c3c3c'
  }
}

const basicTheme: BasicTheme = basicThemes.light;

const borderRadiuses: {
  [key in 's' | 'm' | 'full']: string
} = {
  's': '10px',
  'm': '16px',
  'full': '9999px'
}

const offsets = {
  xs: '6px',
  s: '10px',
  m: '16px',
  l: '26px',
  xl: '42px'
}

const styleConstants = {
  fontColors: {
    faded: '#7c7c84'
  },
  fontSize: {
    xs: '12px',
    l: '26px'
  },
  utilityColors: {
    positive: '#22e172'
  },
  primaryColor: {
    basic: primaryColor,
    advanced: {
      static: primaryColor['300'],
      active: primaryColor['100'],
      hover: primaryColor['400'],
      highlighted: primaryColor['500']
    }
  },
  theme: {
    basic: basicTheme,
    advanced: {
      invisible: basicTheme['2'],
      active: basicTheme['3'],
      hover: basicTheme['4'],
      contrast: basicTheme['8']
    }
  },
  borderRadiuses,
  borderRadiusTemplates: {
    s: { borderRadius: borderRadiuses.s },
    m: { borderRadius: borderRadiuses.m },
    full: { borderRadius: borderRadiuses.full }
  },
  borderWidths: {
    s: { borderWidth: '1px' },
    m: { borderWidth: '2px' }
  },
  offsets,
  paddingTemplates: {
    h: {
      s: { padding: `${offsets.xs} ${offsets.s}` },
      m: { padding: `${offsets.s} ${offsets.m}` },
      l: { padding: `${offsets.m} ${offsets.l}` }
    }
  }
}

export { styleConstants as sc }
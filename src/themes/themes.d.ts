import { PaletteOptions, Palette } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    yellow: Palette['primary'];
    midnight: Palette['primary'];
    white: Palette['primary'];
  }

  interface PaletteOptions {
    yellow?: PaletteOptions['primary'];
    midnight?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
  }
}

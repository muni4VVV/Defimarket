import {
  crimson,
  crimsonDark,
  slate,
  slateDark,
  violet,
  violetA,
  violetDark,
  violetDarkA,
  green,
  greenDark,
  whiteA,
  red,
  redDark,
  gray,
  blackA,
} from '@radix-ui/colors'
import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'
import type * as Stitches from '@stitches/react'
import { reset } from 'utils/css/reset'

export const { createTheme, keyframes, styled, globalCss, getCssText } =
  createStitches({
    theme: {
      colors: {
        ...crimson,
        ...violet,
        ...violetA,
        ...slate,
        ...red,
        ...whiteA,
        ...blackA,
        ...green,
        ...gray,

        /* Please leave
        accent1: 'white',
        primary1: 'black',
        primary2: '$violet2',
        primary3: '$violet3',
        primary4: '$violet4',
        primary5: '#e3e6ea',
        primary6: '$violet6',
        primary7: '$violet7',
        primary8: '$violet8',
        primary9: '#ccc',
        primary10: '#222',
        primary12: '#eee',
        */

          // Primary == slateDark
        primary1: '#151718',
        primary2: '#1a1d1e',
        primary3: '#202425',

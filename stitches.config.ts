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

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
        primary4: '#26292b',
        primary5: '#2b2f31',
        primary6: '#313538',
        primary7: '#3a3f42',
        primary8: '#4c5155',
        primary9: '#697177',
        primary10: '#787f85',
        primary11: '#9ba1a6',
        primary12: '#ecedee',

          // Secondary == slate
        secondary1: '#fbfcfd',
        secondary2: '#f8f9fa',
        secondary3: '#f1f3f5',
        secondary4: '#eceef0',
        secondary5: '#e6e8eb',
        secondary6: '#dfe3e6',
        secondary7: '#d7dbdf',
        secondary8: '#c1c8cd',
        secondary9: '#889096',
        secondary10: '#7e868c',
        secondary11: '#687076',
        secondary12: '#11181c',

        //Gray
        // Use radix gray

        //Red
        red1: '$crimson1',
        red2: '$crimson2',
        red3: '$crimson3',
        red4: '$crimson4',
        red5: '$crimson5',
        red6: '$crimson6',
        red7: '$crimson7',
        red8: '$crimson8',
        red9: '$crimson9',
        red10: '$crimson10',

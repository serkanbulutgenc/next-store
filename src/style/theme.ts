'use client'
import {responsiveFontSizes, createTheme} from '@mui/material/styles'

export const theme = responsiveFontSizes(createTheme({
    cssVariables:{
        cssVarPrefix:'--var'
    }, 
    components:{
        MuiButton:{
            defaultProps:{
                disableElevation:true,
                disableFocusRipple:true,
                disableRipple:true ,
              
            },
            styleOverrides:{
                root:{
                    textTransform:'none'
                }
            }
        },
        MuiAppBar:{
            defaultProps:{
                elevation:0,
                position:'static'
            }
        },
        MuiToolbar:{
            defaultProps:{
                variant:'dense'
            }
        }
    }
}))
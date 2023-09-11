import {ReactNode} from 'react'
import {createTheme} from '@mui/material/styles'

const MuiTheme = {{children}:{children:ReactNode}} => {
    let theme = createTheme({

    })
    return(
        <>
        {children}
        </>
    )
}
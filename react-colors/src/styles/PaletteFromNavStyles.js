import {
    makeStyles,
    Theme,
    createStyles,
} from "@material-ui/core/styles"
import { DRAWER_WIDTH } from '../constants'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        appBar: {
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        appBarShift: {
            width: `calc(100% - ${DRAWER_WIDTH}px)`,
            marginLeft: DRAWER_WIDTH,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        navBtns: {
            marginRight: '1rem',
            '& a': {
                textDecoration: 'none',
            }
        },
        button: {
            margin: '0 0.5rem',
        },
    })
)

export default useStyles
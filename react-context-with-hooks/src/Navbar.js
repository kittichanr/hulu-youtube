import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import InputBase from '@material-ui/core/InputBase';
import Searchcon from '@material-ui/icons/Search';
import useStyles from './styles/navBarStyles'
import { ThemeContext } from './contexts/ThemeContext'

const Navbar = () => {
    const classes = useStyles()
    const { isDarkMode, changeTheme } = useContext(ThemeContext)

    return (
        <div className={classes.root}>
            <AppBar position='static' color={isDarkMode ? 'inherit' : 'primary'}>
                <Toolbar >
                    <IconButton className={classes.menuButton} color='inherit'>
                        <span>😍</span>
                    </IconButton>
                    <Typography className={classes.title} variant='h6' color='inherit'>
                        App Title
                    </Typography>
                    <Switch onChange={changeTheme} />
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Searchcon />
                        </div>
                        <InputBase
                            placeholder='Search....'
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar

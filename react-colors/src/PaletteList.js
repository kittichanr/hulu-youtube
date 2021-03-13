import React from "react"
import MiniPalette from "./Components/MiniPalette"
import { withStyles } from "@material-ui/styles"
import styles from './styles/PaletteListStyles'

const PaletteList = ({ classes, palettes, history }) => {
  const handleClick = (id) => history.push(`/palette/${id}`)

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => {
            return (
              <MiniPalette
                {...palette}
                onClick={() => handleClick(palette.id)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(PaletteList)

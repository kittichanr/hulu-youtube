import React from "react"
import { withStyles } from "@material-ui/styles"
import styles from "../styles/MiniPaletteStyles"
import DeleteIcon from '@material-ui/icons/Delete'

function MiniPalette({ classes, paletteName, emoji, colors, onClick }) {
  const miniColorBoxes = colors.map((color) => (
    <div
      key={color.name}
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
    />
  ))
  return (
    <div className={classes.root} onClick={onClick}>
      <div className={classes.delete}>
        <DeleteIcon className={classes.deleteIcon} style={{
          transition: 'all 0.3s ease-in-out'
        }} />
      </div>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette)

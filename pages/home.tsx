import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Head from 'next/head'

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import AlarmIcon from '@material-ui/icons/Alarm'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

type Props = {}

const UseStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
)

export default function home({}: Props) {
  const classes = UseStyles()

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>
      <div className={classes.root}>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>

        <div>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="delete" disabled color="primary">
            <DeleteIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="add an alarm">
            <AlarmIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

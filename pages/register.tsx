import React, { Fragment, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../redux/actions'
import Alert from '@material-ui/lab/Alert'

type Props = {}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

interface IAccount {
  username: string
  password: string
}

export default function Register({}: Props) {
  const classes = useStyles()
  const [account, setAccount] = useState<IAccount>({
    username: '',
    password: '',
  })

  const dispatch = useDispatch()

  const registerReducer = useSelector(
    ({ registerReducer }: any) => registerReducer,
  )

  return (
    <Fragment>
      <div className={classes.container}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="/static/img/next_register.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <form
              noValidate
              onSubmit={(event) => {
                event.preventDefault()
                dispatch(actions.register(account))
              }}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={account.username}
                onChange={(e) => {
                  setAccount({ ...account, username: e.target.value })
                }}
                id="username"
                label="Username"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={account.password}
                onChange={(e) => {
                  setAccount({ ...account, password: e.target.value })
                }}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Register
              </Button>
              <Button
                fullWidth
                size="small"
                color="primary"
                onClick={() => {
                  // Router.back();
                  Router.push('login')
                }}
              >
                Cancel
              </Button>

              {registerReducer.isFailed && (
                <Alert severity="error">Register failed!</Alert>
              )}
            </form>
          </CardContent>
        </Card>
        <style jsx global>
          {`
            body {
              min-height: 100vh;
              position: relative;
              margin: 0;
              background-size: cover;
              background-image: url('/static/img/bg4.jpg');
              text-align: center;
            }
          `}
        </style>
      </div>
    </Fragment>
  )
}

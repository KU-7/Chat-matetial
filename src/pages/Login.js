import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import TextField from '@material-ui/core/TextField'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Button from '@material-ui/core/Button'

import styled from 'styled-components'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const useSignInput = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))

const useSubmit = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      height: '1ch',
    },
  },
}))

const Login = () => {
  const classes = useStyles()
  const inputs = useSignInput()
  const submit = useSubmit()

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Chat
          </Typography>
          <Link type="button" to="/signup">
            SignUp
          </Link>
        </Toolbar>
      </AppBar>

      <LoginDiv>
        <ExitToAppIcon color="secondary" fontSize="large" />
        <LoginTitle>Login</LoginTitle>
        <form className={inputs.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="E-mail *" variant="outlined" />
        </form>
        <form className={inputs.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Password *" variant="outlined" />
        </form>

        <Button className={submit.root} variant="contained" color="secondary">
          Login
        </Button>
      </LoginDiv>
    </div>
  )
}

const LoginDiv = styled.div`
  padding-top: 50px;
  text-align: center;
  background-color: #939597;
  color: #fff;
  height: 85vh;
`

const LoginTitle = styled.h1`
  margin: 0;
`

export default Login

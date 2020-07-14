import React, { useState } from 'react'
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

import firebase from '../config/firebase'
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

const SignUp = () => {
  const classes = useStyles()
  const inputs = useSignInput()
  const submit = useSubmit()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    // e.preventDefault()

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        console.log(err)
      })
  }

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
          <Link type="button" to="/login">
            Login
          </Link>
        </Toolbar>
      </AppBar>

      <SignForm>
        <ExitToAppIcon color="secondary" fontSize="large" />
        <SignTitle>Sign up</SignTitle>

        <form onSubmit={handleSubmit} className={inputs.root} noValidate autoComplete="off">
          <TextField
            value={name}
            id="name"
            name="name"
            onChange={e => setName(e.target.value)}
            label="Name *"
            variant="outlined"
          />
        </form>

        <form onSubmit={handleSubmit} className={inputs.root} noValidate autoComplete="off">
          <TextField
            value={email}
            id="email"
            name="email"
            onChange={e => setEmail(e.target.value)}
            label="E-mail *"
            variant="outlined"
          />
        </form>

        <form onSubmit={handleSubmit} className={inputs.root} noValidate autoComplete="off">
          <TextField
            value={password}
            id="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
            label="Password *"
            variant="outlined"
          />
        </form>

        <Button type="submit" className={submit.root} variant="contained" color="secondary">
          Sign In
        </Button>
      </SignForm>
    </div>
  )
}

const SignForm = styled.div`
  padding-top: 50px;
  text-align: center;
  background-color: #939597;
  color: #fff;
  height: 85vh;
`

const SignTitle = styled.h1`
  margin: 0;
`

export default SignUp

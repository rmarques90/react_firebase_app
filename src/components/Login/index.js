import React from 'react';
import { FormControl, InputLabel, Button, Input, Paper, CircularProgress, Typography } from '@material-ui/core';

import { login } from '../../actions';

const styles = {
    paper: {
        padding: 20,
        textAlign: 'center',
        display: 'inline-block',
    },
    title: {
        height: 60,
        fontSize: '1.2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 340
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        margin: '20px 0',
        width: '100%'
    },
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EEEEEE',
        height: '100%',
        width: '100%'
    },
    input: {
        margin: '5px 0'
    }
}

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            loadingLogin: false
        }
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleSenha = (event) => {
        this.setState({
            senha: event.target.value
        })
    }

    submit = async () => {
        this.setState({
            loadingLogin: true
        })

        const { email, senha } = this.state;
        
        try {
            await login(email, senha);
        } catch (err) {

        } finally {
            this.setState({
                loadingLogin: false
            })
            console.log("loading3", this.state.loadingLogin);
        }

    }

    goToRegister = () => {
        this.props.history.push("/register");
    }

    render() {

        const { email, senha, loadingLogin } = this.state;

        return (
            <div style={styles.container}>
                <Paper style={styles.paper} elevation={8}>
                    <div style={styles.title}>Login</div>
                    <div style={styles.inputContainer}>
                        <FormControl style={styles.input}>
                            <InputLabel for={"login-email"}>Email</InputLabel>
                            <Input id={"login-email"} value={email} onChange={this.handleEmail} />
                        </FormControl>
                        <FormControl style={styles.input}>
                            <InputLabel for={"login-senha"}>Senha</InputLabel>
                            <Input type={"password"} id={"login-senha"} value={senha} onChange={this.handleSenha} />
                        </FormControl>
                    </div>

                    <Button style={styles.button} variant={"contained"} color={"primary"} disabled={loadingLogin} onClick={this.submit}>
                        {loadingLogin ? <CircularProgress size={20} /> : 'Login'}</Button>
                    <div>
                        <Typography variant={"body2"}>Não tem cadastro ainda?
                            <Button color={"primary"} style={{ margin: 5 }} onClick={this.goToRegister}>Registre-se agora!</Button>
                        </Typography>
                    </div>
                </Paper >
            </div >
        )
    }
}
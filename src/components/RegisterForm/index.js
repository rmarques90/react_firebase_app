import React from 'react';
import Button from '@material-ui/core/Button';
import { Paper, FormControl, InputLabel, Input, CircularProgress } from '@material-ui/core';

import { signUp } from '../../actions';

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EEEEEE',
        height: '100%',
        width: '100%'
    },
    paper: {
        padding: 20,
        textAlign: 'center'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        height: 60,
        fontSize: '1.2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 340
    },
    button: {
        margin: '20px 0',
        width: '100%'
    },
    input: {
        margin: '5px 0'
    }
}

export default class RegisterForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            senha: '',
            loadingRegister: false
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

    submitForm = () => {
        this.setState({
            loadingRegister: true
        })

        const { email, senha } = this.state;


        signUp(email, senha)
            .then(data => {
                console.log(data)
            })
            .catch(err => console.error("Error", err))
            .finally(() => {
                this.setState({
                    loadingRegister: false
                })
            })

    }

    render() {

        return (
            <div style={styles.container}>
                <Paper style={styles.paper} elevation={8}>
                    <div style={styles.title}>Registro</div>
                    <div style={styles.inputContainer}>
                        <FormControl style={styles.input}>
                            <InputLabel for={"reg-form-email"}>Email</InputLabel>
                            <Input id={"reg-form-email"} value={this.state.email} onChange={this.handleEmail}></Input>
                        </FormControl>
                        <FormControl style={styles.input}>
                            <InputLabel for={"reg-form-senha"}>Senha</InputLabel>
                            <Input id={"reg-form-senha"} value={this.state.senha} onChange={this.handleSenha}></Input>
                        </FormControl>
                        <Button style={styles.button} variant={"contained"} color={"primary"} disabled={this.state.loadingRegister} onClick={this.submitForm}>
                            {this.state.loadingRegister ? <CircularProgress size={20} /> : 'Registrar'}</Button>
                    </div>
                </Paper>
            </div>
        )
    }
}
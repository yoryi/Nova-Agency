import React, { Component } from 'react';
import { Row } from 'react-bootstrap'

//Modulo axios para peticiones http
import axios from 'axios'

//Router Dom
import { Redirect } from 'react-router-dom';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            inputcontraseña: '',

            data: [],
            redirect: true

        };
    }



    Send() {
        axios.post("https://novaagency.herokuapp.com/iniciarsesion",
            {
                usuario: this.state.inputValue,
                contraseña: this.state.inputcontraseña

            })
            .then(response => {
                this.setState({
                    data: response.data,
                    redirect: false
                });
            })
            .catch(error =>

                console.log('estado denegado' + error)

            );
    }

    usuario(evt) {
        this.setState({
            inputValue: evt.target.value
        })
    }

    constraseña(evt) {
        this.setState({
            inputcontraseña: evt.target.value
        })
    }


    dasboard(e) {
        this.setState({
            redirect: false
        })
    }


    render() {

        if (!this.state.redirect) {
            return <Redirect to={"/Dasboard"} />
        }

        return (
            <div className="App" style={{ background: 'white', height: '', width: '100%' }}>
                <div className="container-fluid" style={{ background: 'white' }}>

                    <Row>

                        <div className="col-sm-12 col-sm-6  col-lg-6" style={{ backgroundColor: 'white', height: '100vh' }}>

                            <div style={{ paddingTop: '5%', paddingLeft: '5%' }}>
                                <h4 style={{ fontWeight: 'bold' }}>Nova Agency</h4>
                            </div>

                            <div style={{ paddingTop: '13%', paddingLeft: '5%' }}>
                                <h4 style={{ fontWeight: 'bold' }}>Iniciar Sessión</h4>
                                <h6 style={{ color: '#B2B2B2' }}>Reguistraste</h6>
                            </div>

                            <div style={{ paddingTop: '8%', paddingLeft: '5%' }}>

                                <div style={{ paddingBottom: '5%' }}>
                                    <p>Usuario</p>

                                    <div style={{ backgroundColor: '', width: '55%' }}>
                                        <input type="email"
                                            className="form-control"
                                            aria-describedby="emailHelp"
                                            placeholder="Juan"

                                            value={this.state.inputValue}
                                            onChange={evt => this.usuario(evt)}

                                        ></input>
                                    </div>
                                </div>

                                <div style={{ paddingBottom: '5%' }}>
                                    <p>Constraseña</p>
                                    <div style={{ backgroundColor: '', width: '55%' }}>
                                        <input type="password"
                                            className="form-control"
                                            placeholder="xxxxxxxx"

                                            value={this.state.inputcontraseña}
                                            onChange={evt => this.constraseña(evt)}
                                        ></input>
                                    </div>
                                </div>

                                <div style={{ paddingTop: '9%' }}>
                                    <div style={{ backgroundColor: '', width: '55%' }}>
                                        <button style={{ width: '100%', backgroundColor: '', borderColor: '', borderRadius: 30 }} type="submit" className="btn btn-success" onClick={this.Send.bind(this)} >Iniciar sessión</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-sm-12 col-sm-6 col-lg-6 row align-items-center" style={{ backgroundColor: '#F0EEFF', height: '100vh' }}>

                            <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                                <h5>Somos una agencia digital enfocada en hacer tus apps apropiadas.</h5>
                            </div>

                        </div>

                    </Row>

                </div>
            </div>


        );
    }
}



export default App;

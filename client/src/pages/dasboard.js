import React, { Component } from 'react';
import { Row } from 'react-bootstrap'

//Modulo axios para peticiones http
import axios from 'axios'

//Router Dom
import { Link } from 'react-router-dom';

//IMAGENES
import Borrar from '../assets/borrar.png'
import Editar from '../assets/editar.png'


class App extends Component {

    state = {

        id: '',

        identificacion: '',
        nombre: '',
        apellido: '',
        ciudad: '',

        personal: [],
        isLoading: true,

    };



    Guardar() {
        axios.post('https://novaagency.herokuapp.com/Personal/Nuevo',
            {

                identificacion: this.state.identificacion,
                nombre: this.state.nombre,
                apellido: this.state.apellido,
                ciudad: this.state.ciudad

            })
            .then(response => {
                console.log('Reguistro exitoso', response.data)
                return window.location.reload();
            })
            .catch(error =>
                console.log('estado denegado' + error)
            );
    }

    Editar() {

        axios.put('https://novaagency.herokuapp.com/Personal/' + this.state.id,
            {
                identificacion: this.state.identificacion,
                nombre: this.state.nombre,
                apellido: this.state.apellido,
                ciudad: this.state.ciudad

            })
            .then(response => {
                console.log('Reguistro exitoso', response.data)
                return window.location.reload();
            })
            .catch(error =>
                console.log('estado denegado' + error)
            );
    }

    Borrar(_id) {
        axios.delete(`https://novaagency.herokuapp.com/Personal/${_id}`)

            .then(response => {
                console.log('Reguistro exitoso', response.data)
                return window.location.reload();
            })
            .catch(error =>
                console.log('estado denegado' + error)
            );
    }

    Personal() {
        axios.get('https://novaagency.herokuapp.com/Personal')

            .then(response => {
                this.setState({
                    personal: response.data,
                    isLoading: false
                });
            })
            //catch si hay algun error
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.Personal();
    }

    identificacion(evt) {
        this.setState({
            identificacion: evt.target.value
        })
    }

    nombre(evt) {
        this.setState({
            nombre: evt.target.value
        })
    }

    apellido(evt) {
        this.setState({
            apellido: evt.target.value
        })
    }

    ciudad(evt) {
        this.setState({
            ciudad: evt.target.value
        })
    }

    getid(_id) {

        this.setState({
            id: _id
        })

    }

    render() {

        const { isLoading, personal } = this.state;

        return (
            <div className="App" style={{ background: 'white', height: '', width: '100%' }}>
                <div className="container-fluid" style={{ background: 'white' }}>

                    <Row>

                        <div className="col-sm-12 col-sm-6  col-lg-6" style={{ backgroundColor: 'white', height: '100vh' }}>

                            <div style={{ paddingTop: '5%', paddingLeft: '5%' }}>
                                <h4 style={{ fontWeight: 'bold' }}>Nova Agency</h4>
                            </div>


                            <div style={{ paddingTop: '8%', paddingLeft: '5%' }}>

                                <div className="modal fade" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Editar Persona</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">

                                                <div style={{ backgroundColor: '', width: '55%' }}>
                                                    <input type="email"
                                                        class="form-control"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Identificacion"

                                                        value={this.state.identificacion}
                                                        onChange={evt => this.identificacion(evt)}

                                                    ></input>
                                                </div>

                                                <div style={{ backgroundColor: '', width: '55%' }}>
                                                    <input type="email"
                                                        class="form-control"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Nombre"

                                                        value={this.state.nombre}
                                                        onChange={evt => this.nombre(evt)}

                                                    ></input>
                                                </div>

                                                <div style={{ backgroundColor: '', width: '55%' }}>
                                                    <input type="email"
                                                        class="form-control"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Apellido"

                                                        value={this.state.apellido}
                                                        onChange={evt => this.apellido(evt)}

                                                    ></input>
                                                </div>

                                                <div style={{ backgroundColor: '', width: '55%' }}>
                                                    <input type="email"
                                                        class="form-control"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Ciudad"

                                                        value={this.state.ciudad}
                                                        onChange={evt => this.ciudad(evt)}

                                                    ></input>
                                                </div>

                                            </div>
                                            <div className="modal-footer justify-content-center">
                                                <button type="button" className="btn btn-primary" onClick={this.Editar.bind(this)}>Editar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <form className="form-inline">
                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                        Nuevo Personal
</button>


                                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Nuevo Personal</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">


                                                    <div style={{ backgroundColor: '', width: '55%' }}>
                                                        <input type="email"
                                                            class="form-control"
                                                            aria-describedby="emailHelp"
                                                            placeholder="Identificacion"

                                                            value={this.state.identificacion}
                                                            onChange={evt => this.identificacion(evt)}

                                                        ></input>
                                                    </div>

                                                    <div style={{ backgroundColor: '', width: '55%' }}>
                                                        <input type="email"
                                                            class="form-control"
                                                            aria-describedby="emailHelp"
                                                            placeholder="Nombre"

                                                            value={this.state.nombre}
                                                            onChange={evt => this.nombre(evt)}

                                                        ></input>
                                                    </div>

                                                    <div style={{ backgroundColor: '', width: '55%' }}>
                                                        <input type="email"
                                                            class="form-control"
                                                            aria-describedby="emailHelp"
                                                            placeholder="Apellido"

                                                            value={this.state.apellido}
                                                            onChange={evt => this.apellido(evt)}

                                                        ></input>
                                                    </div>

                                                    <div style={{ backgroundColor: '', width: '55%' }}>
                                                        <input type="email"
                                                            class="form-control"
                                                            aria-describedby="emailHelp"
                                                            placeholder="Ciudad"

                                                            value={this.state.ciudad}
                                                            onChange={evt => this.ciudad(evt)}

                                                        ></input>
                                                    </div>

                                                </div>
                                                <div className="modal-footer justify-content-center">
                                                    <button type="button" className="btn btn-primary" onClick={this.Guardar.bind(this)}>Guardar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>


                            <div style={{ paddingTop: '8%', paddingLeft: '5%' }}>
                                <h4 style={{ fontWeight: 'bold' }}>Personal</h4>
                            </div>

                            <React.Fragment>
                                <div style={{ backgroundColor: '', height: '50vh' }}>
                                    <div style={{ height: '64%', position: 'absolute', overflowY: 'scroll', width: '100%', paddingLeft: '5%', paddingRight: '10%', backgroundColor: '', }}>
                                        {!isLoading ? (

                                            personal.map((post, index) => {

                                                const { _id, identificacion, nombre, apellido, ciudad } = post;

                                                return (
                                                    <div key={index} style={{ backgroundColor: '', height: '27vh' }}>

                                                        <div className="animate__animated animate__fadeInDown animate__delay-1s" style={{ backgroundColor: '#F0EEFF', borderRadius: 20, height: '25vh' }}>

                                                            <div className="row justify-content-end" style={{ width: '10%', backgroundColor: '', paddingTop: '4%' }}>

                                                            </div>

                                                            <div className="row" style={{ paddingLeft: '5%', paddingTop: '0%', paddingRight: '5%' }}>

                                                                <div className="col">
                                                                    <h3 className="animate__animated animate__fadeInDown animate__delay-2s" style={{ color: 'black' }}>{nombre}  {apellido}</h3>
                                                                </div>

                                                                <div className="col justify-content-center">

                                                                    <button style={{ width: '30%', backgroundColor: '', borderColor: '', borderRadius: 30 }} type="submit" className="btn btn-transparents" data-toggle="modal" data-target="#exampleModal1" onClick={this.getid.bind(this, _id)} >
                                                                        <img src={Editar} style={{ width: '5vh' }} alt="Editar" />
                                                                    </button>


                                                                    <button style={{ width: '30%', backgroundColor: '', borderColor: '', borderRadius: 30 }} type="submit" className="btn btn-transparents" onClick={this.Borrar.bind(this, _id)}>
                                                                        <img src={Borrar} style={{ width: '5vh' }} alt="Borrar" />
                                                                    </button>


                                                                </div>
                                                            </div>

                                                            <div style={{ paddingLeft: '5%', paddingTop: '2%' }}>
                                                                <h6 className="animate__animated animate__fadeInDown animate__delay-2s" style={{ color: '#2700FF' }}>{identificacion}</h6>
                                                            </div>

                                                            <div style={{ paddingLeft: '5%', paddingTop: '2%' }}>
                                                                <div style={{ flexDirection: 'column', backgroundColor: '', justifyItems: 'center', alignItems: 'center' }}>
                                                                    <h6 className="animate__animated animate__fadeInDown animate__delay-3s" style={{ fontSize: 18, paddingLeft: '0%', color: '#212121', paddingTop: '0%' }}>{ciudad}</h6>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                );
                                            })
                                        ) :
                                            (
                                                <h6>Cargando...</h6>
                                            )}

                                    </div>
                                </div>
                            </React.Fragment>


                        </div>
                        <div className="col-sm-12 col-sm-6  col-lg-6" style={{ backgroundColor: '#F0EEFF', height: '100vh' }}>

                            <div className="row justify-content-end" style={{ paddingTop: '5%', paddingRight: '0%', }}>

                                <Link className="nav-link animated slideInRight slow" to="/">
                                    <h5 style={{ color: 'grey' }}>Cerrar Sessión</h5>
                                </Link>

                            </div>

                        </div>

                    </Row>

                </div>
            </div >
        );
    }
}



export default App;

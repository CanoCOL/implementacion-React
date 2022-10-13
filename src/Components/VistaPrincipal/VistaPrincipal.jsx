import { NavBar } from '../NavBar/NavBar'
import { Link } from 'react-router-dom'
import './VistaPrincipal.css'

export function VistaPrincipal() {
    return (
        <>
            <div class="todoVistaPrincipal">
                <div className="col-2">
                    <NavBar/>
                </div>

                <div className="col-10">
                <main class="mainVistaPrincipal">
                    <Link id="crearVistaPrincipal">CREAR CATEGORÍAS</Link>
                    <section class="galeriaVistaPrincipal">
                        <div class="caja1VistaPrincipal">
                            <div class="tituloVistaPrincipal">Arquitectura</div>
                            <div class="crudVistaPrincipal">
                                <img src="https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/editar.png?alt=media&token=fd72b461-f82e-4148-847a-f1107525f756" alt="" />
                                <img src="https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/eliminar.png?alt=media&token=d027b299-c529-462c-bfa6-452fba9a1f17" alt="" />
                            </div>
                        </div>
                        <div class="caja2VistaPrincipal">
                            <div class="tituloVistaPrincipal">Alimentos</div>
                            <div class="crudVistaPrincipal">
                                <img src="https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/editar.png?alt=media&token=fd72b461-f82e-4148-847a-f1107525f756" alt="" />
                                <img src="https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/eliminar.png?alt=media&token=d027b299-c529-462c-bfa6-452fba9a1f17" alt="" />
                            </div>

                        </div>
                        <div class="caja3VistaPrincipal">
                            <div class="tituloVistaPrincipal">Social</div>
                            <div class="crudVistaPrincipal">
                                <img src="https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/editar.png?alt=media&token=fd72b461-f82e-4148-847a-f1107525f756" alt="" />
                                <img src="https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/eliminar.png?alt=media&token=d027b299-c529-462c-bfa6-452fba9a1f17" alt="" />
                            </div>

                        </div>
                    </section>
                </main>
                </div>
            </div>
        </>
    )
}
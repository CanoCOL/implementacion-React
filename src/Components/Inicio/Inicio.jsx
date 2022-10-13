import './Inicio.css'

export function Inicio() {
    return (
        <>
            <div className="ediavlo">
                <div className="inicioseccion">

                    <form>
                        <div className="center">
                            <img src="https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/foto%20(1).png?alt=media&token=8a61cb8b-767c-49b2-bab8-cd13105efa4e" height="130px" alt="prysma " />
                        </div>

                        <div className="text-center form-check p-3 m-1 ">

                            <input placeholder="USUARIO" type="text" id="usuarioi" className="bg-black text-white border-warning  text-center" />
                            <label className=" form-label bg-warning" for="usuarioi"></label>
                        </div>

                        <div className="text-center form-check p-3 m-1">
                            <input placeholder="CONTRASEÑA" type="password" id="contraseñai" className="bg-black text-white border-warning text-center" />
                            <label className="form-label bg-warning" for="contraseñai"></label>
                        </div>


                        <div className="text-center  m-5">
                            <button className=" btn-info bg-warning  btn-dark" type="button">INICIAR SESION</button>
                        </div>




                    </form>

                </div>

            </div>
        </>
    )
}
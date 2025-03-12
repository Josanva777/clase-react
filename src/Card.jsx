

function Card({ type, prop }) {
    return (
        <section className="card">
            <div>
                {
                    type === 'clientes' ? (
                        <div>
                            <p>Nombre: {prop.nombre} </p>
                            <p>Ciudad: {prop.ciudad} </p>
                            <p>Edad: {prop.edad} </p>
                        </div>
                    ) : (
                        <div>
                            <p>Origen: {prop.origen} </p>
                            <p>Destino: {prop.destino} </p>
                        </div>
                    )
                }
                {/*                 <p>Nombre: {prop.nombre} </p>
                <p>Ciudad: {prop.ciudad} </p>
                <p>Edad: {prop.edad} </p> */}
            </div>
            <div>
                <p>Ver</p>
            </div>
        </section>
    )
}


export default Card;
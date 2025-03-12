import Card from './Card'
import MenuLateral from './MenuLateral'
import { clientes } from "./database.jsx"

function ListadoClientes() {
    return (
        <div className="panel-control">
            <MenuLateral />
            <section className="panel-control-clientes">
                {
                    clientes.map((cliente) => { 
                        return <Card type={'clientes'} prop={cliente} />
                     })
                }

            </section>
        </div>
    )
}

export default ListadoClientes;
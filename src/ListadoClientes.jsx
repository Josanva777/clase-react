import Card from './Card'
import MenuLateral from './MenuLateral'

function ListadoClientes() {
    return (
        <div className="panel-control">
           <MenuLateral />
            <section className="panel-control-clientes">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </section>
        </div>
    )
}

export default ListadoClientes;
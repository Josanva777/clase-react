
import Card from './Card';
import MenuLateral from './MenuLateral';



function PanelControl(){
    return(
        <div className="panel-control">
           <MenuLateral />
            <section className="panel-control-section">
            <Card />
            <Card />
            <Card />
            </section>
        </div>
    )
}

export default PanelControl;
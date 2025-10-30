interface CabecalhoProps {
    texto: string;
}

const Cabecalho = ({texto}: CabecalhoProps) => {

    return <h1>{texto}</h1>

}
export default Cabecalho
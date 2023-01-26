import TextoCentral from "../components/TextoCentral"

export default ({route}) => {
    const {numero} = route.params;
    return(
        <TextoCentral corFundo='#9932cd'>
            Tela C - {numero}
        </TextoCentral>
    )
}
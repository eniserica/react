import Paragrafo from "../components/Paragrafo";
import Titulo from "../components/Titulo";
import Container from "../components/Container";
import Informacao from "../components/Informacao";

const App = () => {
    return (
        <Container>
            <Titulo />
            <Paragrafo />
            <Informacao />
        </Container>
    );
}

export default App;
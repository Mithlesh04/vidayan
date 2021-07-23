import { Navbar, Container } from 'react-bootstrap';
export function Header() {

    return <Navbar className="px-4 py-1" style={{ backgroundColor: "#FB5B16", boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }} fixed="top">
        <Container fluid mx={3}>
            <Navbar.Brand style={{ color: "#FFFBFB", fontStyle: "normal", fontWeight: "bold" }}>
                Vidyayan
            </Navbar.Brand>
        </Container>
    </Navbar>

}
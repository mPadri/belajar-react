import React, { Component } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Media, 
  Alert, 
  Badge, 
  Button, 
  Breadcrumb, 
  ButtonGroup, 
  ButtonToolbar, 
  Card, 
  Carousel, 
  Dropdown,
  Form,
  InputGroup, 
  FormControl,
  Image,
  Figure,
  Jumbotron,
  ListGroup,
  Modal,
  Nav,
  Navbar,
  OverlayTrigger,
  Popover,
  Pagination,
  ProgressBar,
  Table,
  Tabs,
  Tab,
  Collapse
      } from 'react-bootstrap'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      buka:true
    }
  }
  render() {
    const munculPopover = <Popover title="informasi">Selamat kamu berhasil</Popover>
    return (
      <Container>

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Menu</Navbar.Brand>
          <Nav>
            <Nav.Item>
              <Nav.Link href="#">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Info</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="silahkan cari" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Info</Breadcrumb.Item>
        </Breadcrumb>

        {/* <Nav>
          <Nav.Item>
            <Nav.Link href="#">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Info</Nav.Link>
          </Nav.Item>
        </Nav> */}
        <br/>
        <Tabs defaultActiveKey="info">
          <Tab eventKey="home" title="home">
            <p>Contoh halaman home</p>
          </Tab>
          <Tab eventKey="info" title="info">
            <p>Conto halaman info</p>
          </Tab>
        </Tabs>
        <Carousel>
          <Carousel.Item>
            <img 
              className="d-block w-100" 
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg" 
              alt="travel1" />
              <Carousel.Caption>
                <h3>Tiket Pesawat Murah 1</h3>
                <p>Dapatkan Promo Tiket Pesawat Murah</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100" 
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png" 
              alt="travel2" />
              <Carousel.Caption>
                <h3>Tiket Pesawat Murah 2</h3>
                <p>Dapatkan Promo Tiket Pesawat Murah</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100" 
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg" 
              alt="travel3" />
              <Carousel.Caption>
                <h3>Tiket Pesawat Murah 3</h3>
                <p>Dapatkan Promo Tiket Pesawat Murah</p>
              </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        <br/>

        <Jumbotron>
          <h1>Hello Food</h1>
          <p>Selamat Datang di Situs Makanan Nusantar</p>
          <Button variant="primary">Lebih Lengkap</Button>
        </Jumbotron>

        <Row>
          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                alt="Gambar sate" />
              <Media.Body>
                <h5>Media Heading</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                  Donec lacinia congue felis in faucibus.
              </p>
              </Media.Body>
            </Media>
          </Col>
          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                alt="Gambar Sate" />
              <Media.Body>
                <h5>Makanan Sate</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                  Donec lacinia congue felis in faucibus.
              </p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert variant="primary">User yang kamu masukan salah</Alert>
          </Col>
          <Col>
            <h5>
              Pesannya adalah <Badge variant="secondary">Benar</Badge>
            </h5>

            <Button variant="primary">
              Profile <Badge variant="secondary">5</Badge>
            </Button>
          </Col>
          <Col>
            <Button variant="info">Kirim</Button>
            <br />
            {/* <ButtonGroup className="mr-2" aria-label="first group">
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
            </ButtonGroup> */}

            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="mr-2" aria-label="First group">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
              </ButtonGroup>

              <ButtonGroup className="mr-2" aria-label="Second group">
                <Button>5</Button>
                <Button>6</Button>
                <Button>7</Button>
              </ButtonGroup>

              <ButtonGroup aria-label="Third group">
                <Button>8</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Card style={{width:"300px"}}>
              <Card.Img variant="top" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />

              <Card.Body>
                <Card.Title>Sate</Card.Title>
                <Card.Text>Sate adalah makanan khas Indonesia</Card.Text>
                <Button variant="primary">Visit Indonesia</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                Pilih Menu
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Sate</Dropdown.Item>
                <Dropdown.Item href="#">Ayam</Dropdown.Item>
                <Dropdown.Item href="#">Ikan</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Masukan Nama" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control Text="email" placeholder="Masukan Email" />
                <Form.Text className="text-muted">
                  Kami Tidak Akan Menyalahgunakan Email Kamu
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Masukan Password" />
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Kami setuju" />
              </Form.Group>
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl placeholder="Username"/>
            </InputGroup>

            <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/foodsmall.jpg" roundedCircle />
            <Figure>
              <Figure.Image 
                width={170} 
                height={180} 
                alt="Gambar Nasi Padang" 
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
              <Figure.Caption>
                Nasi Padang, Makanan Melegenda Asal Indonesia
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <br/><br/>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item active>Nasi Padang</ListGroup.Item>
              <ListGroup.Item>Sate Madura</ListGroup.Item>
              <ListGroup.Item>Ayam Geprek</ListGroup.Item>
              <ListGroup.Item>Bebek Panggang</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Info</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Simpan Data Pelanggan</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save Change</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Col>
          <Col>
            <OverlayTrigger trigger="click" placement="right" overlay={munculPopover}>
              <Button variant="success">Munculkan Overlay</Button>
            </OverlayTrigger>
            <br/><br/>
            <Pagination size="sm">
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item active>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
            </Pagination>
            <br/><br/>
            <ProgressBar variant="danger" now={75} label="75" />
          </Col>
        </Row>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Menu</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dila</td>
              <td>Sate</td>
              <td>20.000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bejo</td>
              <td>Soto</td>
              <td>15.000</td>
            </tr>
          </tbody>
        </Table>

        <Button variant="primary" onClick={()=>this.setState({buka: !this.state.buka})}>Tampilkan</Button>
        <Collapse in={this.state.buka}>
        <p>menampilkan pesan sesuai permintaan</p>
        </Collapse>
        
      </Container>
    );
  }
}

export default App;

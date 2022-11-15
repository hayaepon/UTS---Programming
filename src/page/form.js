
import { React, useState } from 'react'
import { Col, Container, Form, Row, Select, } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const [name, setName] = useState("");
  const [pesanan, setPesanan] = useState("");
  const [Qty, setQty] = useState("");
  const [Total, setTotal] = useState("");
  const [bayar, setBayar] = useState("");
  const [diskon, setDiskon] = useState("");
  const [setelahdiskon, setSetelahDiskon] = useState("");
  const [sisabayar, setSisaBayar] = useState("");
  const [inputs, setInputs] = useState("");
  let navigate = useNavigate();
  async function handleClick(event) {
    event.preventDefault();
    navigate("/Home", { replace: true });
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let Total = 25000 * parseInt(inputs.Qty);
    let setelahdiskon = Total - (isNaN(parseInt(inputs.diskon))? 0 : (Total * (parseInt(inputs.diskon)/100))); //hitung diskon
    let sisabayar = parseInt(inputs.bayar) - setelahdiskon;
    setTotal(Total);
    setName(inputs.nama);
    setPesanan(inputs.pesanan);
    setBayar(inputs.bayar);
    setSisaBayar(sisabayar);
    setQty(inputs.Qty);
    setDiskon(inputs.diskon);
    setSetelahDiskon(setelahdiskon);

  }
  return (
    <>
    <div className='text-center'><h1><b>MENU</b></h1>
    <p>1. NASI GORENG<br />
    2. BURGER<br/>
    3. TELOR<br/>
    4. SATE<br/>
    5. OREG TEMPE<br/>
    </p>
    </div>
      <Container>
        <Row>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Label ><b>Nama</b></Form.Label>
                <Form.Control
                  type="text"
                  name="nama"
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label ><b>Pesanan</b></Form.Label>
                <Form.Select
                type="select"
                  name="pesanan"
                  onChange={handleChange}>
              <option value="nasi">1. NASI GORENG</option>
              <option value="telur" selected>2. TELUR CEPLOK</option>
              <option value="tempe">3. TEMPE OREG</option>
              <option value="sate">4. SATE</option>
              <option value="tempe">5. BURGER</option>
               </Form.Select>
              </Col>
              <Col>
                <Form.Label ><b>Qty</b></Form.Label>
                <Form.Control
                  type="number"
                  name="Qty"
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label ><b>Bayar</b></Form.Label>
                <Form.Control
                  type="number"
                  name="bayar"
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label ><b>Diskon</b></Form.Label>
                <Form.Control
                  type="number"
                  name="diskon"
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input className='mt-2 mb-2' type="submit" />
              </Col>
            </Row>
          </Form>
        </Row>
        <Container className="bg-light">
          <Row>
            <Col md={6} sm={6}><b>Nama</b></Col>
            <Col md={6} sm={6}>{name}</Col>
          </Row>
          <Row>
            <Col md={6} sm={6}><b>Pesanan</b></Col>
            <Col md={6} sm={6}>{pesanan}</Col>
          </Row>
          <Row>
          <Col md={6} sm={6}><b>Harga</b></Col>
          <Col md={6} sm={6}><b>25000</b></Col>
          </Row>
          <Row>
            <Col md={6} sm={6}><b>Qty</b></Col>
            <Col md={6} sm={6}>{Qty}</Col>
          </Row>
          <Row>
            <Col md={6} sm={6}><b>Total</b></Col>
            <Col md={6} sm={6}>{Total}</Col>
          </Row>
          <Row>
            <Col md={6} sm={6}><b>Diskon</b></Col>
            <Col md={6} sm={6}>{diskon}<b>%</b></Col>
          </Row>
          <Row>
            <Col md={6} sm={6}><b>Total setelah Diskon</b></Col>
            <Col md={6} sm={6}>{setelahdiskon}</Col>
          </Row>
          <Row>
            <Col md={6} sm={6}><b>Bayar</b></Col>
            <Col md={6} sm={6}>{bayar}</Col>
          </Row>
          <Row>
            <Col md={6} sm={6}><b>Sisa Pembayaran</b></Col>
            <Col md={6} sm={6}>{sisabayar}</Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

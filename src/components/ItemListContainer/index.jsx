import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import style from './style.module.css'

export default function ItemListContainer() {
    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('/data/productos.json')
            const productos = await response.json()
            const productosFiltrados = productos.filter(producto => producto.category === id)

            const items = productosFiltrados.length > 0 ? productosFiltrados : productos

            setItems(items)
        }

        getProducts()
    }, [id])

    return (
        <Container fluid className='mt-4'>
            <Row>
                {items.map(item => (
                    <Col key={item.id} lg={4} className='mb-4'>
                        <Card>
                            <Card.Img variant='top' src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Link to={`/item/${item.id}`} className={style['btn_carrito']}>Ver más</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
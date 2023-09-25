import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link, Form } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import style from './style.module.css'
import { CartContext } from '../CartContext'
import { getDocs, collection, query, where, doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/client'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [productsAdapted, setProductsAdapted] = useState([])

    const { categoryId } = useParams()

    const collectionRef = categoryId
        ? query(collection(db, "items"), where('categoryId', '==', categoryId))
        : collection(db, "items")

    useEffect(() => {
        getDocs(collectionRef)
            .then(response => {
                setProductsAdapted(response.docs.map(doc => {
                    const data = { ...doc.data(), id: doc.id }
                    return data
                }))
            })
    }, [categoryId])

    return (
        <Container fluid className='mt-4'>
            <Row>
                {productsAdapted.map(item => (
                    <Col key={item.id} lg={4} className='mb-4'>
                        <Card>
                            <Card.Img variant='top' src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
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

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const docRef = doc(db, "items", id)

        getDoc(docRef)
            .then(response => {
                if (response.exists()) {
                    setProduct(response.data())
                } else {
                }
            })
    }, [id])

    if (product === null) {
        return (
            <div className={['charge_container']}>
                <h2>Cargando...</h2>
            </div>
        )
    } else {
        return (
            <Container fluid className='mt-4'>
                <Row>
                    <Col sm={12} md={8} lg={6}>
                        <Card>
                            <Card.Img variant='top' src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>
                                    ${product.price}
                                </Card.Text>
                                <Button variant='primary'>Agregar al carrito</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ItemListContainer
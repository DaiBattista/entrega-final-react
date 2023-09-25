import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/index'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/client'
import { Card, Col, Container, Row } from "react-bootstrap"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { id } = useParams()

    const docRef = doc(db, 'items', id)

    getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)
        }, [id])

    if (product === null) {
        return (
            <Container fluid className='mt-4'>
                <Row>
                    <Col sm={12} md={8} lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Cargando...</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <ItemDetail detail={product} />
    )
}
export default ItemDetailContainer
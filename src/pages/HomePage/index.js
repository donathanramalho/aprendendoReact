//import NavBar from '../../components/navbar';
import Image from '../../components/image';
import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
//import Footer from '../../components/Footer';
 
export default function HomePage(){
    return(
        <>
            <section className={styles.section}>
                <Row className='content-products'>
                    <Col md={4} sm={6} xs={12}>
                        <Image src={'https://blog.coffeemais.com/wp-content/uploads/2022/01/para-que-serve-o-cafe-interna.jpg'} />
                    </Col>
                    <Col md={4} sm={6} xs={12}>
                        <Image src={'https://blog.coffeemais.com/wp-content/uploads/2022/01/para-que-serve-o-cafe-interna.jpg'} />
                    </Col>
                    <Col md={4} sm={6} xs={12}>
                        <Image src={'https://blog.coffeemais.com/wp-content/uploads/2022/01/para-que-serve-o-cafe-interna.jpg'} />
                    </Col>
                </Row>
            </section>
        </>
    )
}
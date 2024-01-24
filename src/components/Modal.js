import {createPortal} from 'react';

import { Container, Title } from '../styled';

const Modal = () => {
    return createPortal(
        <Container>
            <Title>Modal</Title>
            <p>Hello Users</p>
        </Container>,
        document.getElementById('modal')
    )
}

export default Modal;
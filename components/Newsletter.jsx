import React from 'react';
import styled from 'styled-components';

const Group = styled.form`
    font-family: 'OpenSans';
    display: flex;
    align-self: center;
    flex-flow: wrap;
`;

const Input = styled.input`
    ${props => props.theme.input}
    width: 300px;
`;

const Label = styled.label``;

const Button = styled.button`
    ${props => props.theme.button}
`;

const Newsletter = ({}) => {
    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const submit =  async (email) => {
        setLoading(true);

        const res = await fetch('/api/newsletter', {
            body: JSON.stringify({
                email
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });
        setLoading(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email.length > 0) submit(email);
        setEmail('');
    }
    const handleEmailChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value)
    }

    return (
        <Group onSubmit={handleSubmit} method="POST">
            <React.Fragment>
                <Input id="newsletter-input" type="email" placeholder="example@mail.com" value={email} onChange={handleEmailChange} required="required"/>
                <Button type="submit" disabled={loading}><Label for="newsletter-input">{loading ? <i className="fas fa-circle-notch fa-spin"></i> : "S'inscrire"}</Label></Button>
            </React.Fragment>
        </Group>);
};

export default Newsletter;

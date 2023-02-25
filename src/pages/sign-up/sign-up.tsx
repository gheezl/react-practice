import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SignUp = () => {
    return(
        <Container maxWidth="xl">
            <Formik
                initialValues={{"First Name": "", "Email": ""}}
                // validate={values => {
                // }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <Field name="First Name"/>
                    <ErrorMessage name='First Name' />
                    <Field name="Email" />
                    <ErrorMessage name="Email" />
                    <Button type='submit'>Submit</Button>
                </Form>
            </Formik>
        </Container>
    )
}

export default SignUp;
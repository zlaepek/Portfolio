import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const sections = [
    { title: 'Pink', url: ':pink' },
    { title: 'Blue', url: '#' },
    { title: 'Green', url: '#' },
    { title: 'Yello', url: '#' },
];

export default function PageNotFoundPage() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Colors" sections={sections} />
                <main>
                    
                </main>
            </Container>


            <Footer />
        </ThemeProvider>
    );
}

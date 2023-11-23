import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../components/Header';

import ImageCards from '../../components/imageComponents/GoogleDriveImageCard';
import Footer from '../../components/Footer';

const sections = [
    { title: 'Pink', url: ':pink' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const pinkImages = [
    { id: '1XIF34Zzv_vN3HA-mmtCYWCIy7jhWRVop' },
    { id: '1jrtv9NAHGngriz7b64gvo9M6ZouvFZkV' },
    { id: '1kL3Jobu9HXC9NWWW39mbkpYG-zJtbsih', size: 2 },
    { id: '1jPtQ26R4JECWPQvj_hNa6HdjD01_aSja' },
    { id: '1g65v3v17qL2dv7ROeQQEN9KJR2hDWT2k', size: 2 },
    { id: '1ptUzygOiKE4rzMCYkauToZz800PhM0fB' },
];


export default function DefaultColorPage() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Colors" sections={sections} />
                <main>
                    <Grid container spacing={4}>
                        {pinkImages.map((card) => (
                            <ImageCards key={card.id} card={card} />
                        ))}
                    </Grid>
                </main>
            </Container>


            <Footer
                title="웹사이트 제작"
                description="Something here to give the footer a purpose!"
            />
        </ThemeProvider>
    );
}

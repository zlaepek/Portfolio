import * as React from 'react';
import { useParams } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from '../../components/Header';
import ImageCards from '../../components/imageComponents/GoogleDriveImageCard';
import Footer from '../../components/Footer';

const sections = [
    { title: 'Pink', url: 'pink' },
    { title: 'Blue', url: 'blue' },
    { title: 'Green', url: 'green' },
    { title: 'Yellow', url: 'yellow' },
];

function currentImages(color) {
    switch (color) {
        case "pink":
            return pinkImages;
        case "blue":
            return blueImages;
        case "green":
            return greenImages;
        case "yellow":
            return yellowImages;
    }
}

const pinkImages = [
    { id: '1XIF34Zzv_vN3HA-mmtCYWCIy7jhWRVop' },
    { id: '1jrtv9NAHGngriz7b64gvo9M6ZouvFZkV' },
    { id: '1kL3Jobu9HXC9NWWW39mbkpYG-zJtbsih', size: 2 },
    { id: '1jPtQ26R4JECWPQvj_hNa6HdjD01_aSja' },
    { id: '1g65v3v17qL2dv7ROeQQEN9KJR2hDWT2k', size: 2 },
    { id: '1ptUzygOiKE4rzMCYkauToZz800PhM0fB' },
];

const blueImages = [
];

const greenImages = [
];

const yellowImages = [
];


const defaultTheme = createTheme();


export default function DefaultColorPage() {
    const { color } = useParams();
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Colors" sections={sections} />
                <main>
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                    >
                        <Masonry gutter="30px">
                            {
                                currentImages(color).map((card) => (
                                    <ImageCards key={card.id} card={card} />
                                ))
                            }
                        </Masonry>
                    </ResponsiveMasonry>
                </main>
            </Container>

            <Footer />
        </ThemeProvider>
    );
}

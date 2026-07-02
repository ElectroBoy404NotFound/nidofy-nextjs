"use client"

import DividerLine from "@/components/DividerLine";
import HomeSectionHeading from "@/components/HomeSectionHeading";
import PoemCard from "@/components/PoemCard"

import { Box, Grid } from '@mui/material';

import OnScrollFadeInAnim from "@/animators/OnScrollFadeInAnim";
import { sortByDateAndId } from "@/data/Utils";

import AnimatedButton from "@/components/AnimatedButton";

export default function PoetryClient({ data }) {
        return ( 
            <>
                <OnScrollFadeInAnim>
                    <br />
                    <Box component="div">
                        <Grid container spacing={2}>
                            <Grid size={2}>
                                <AnimatedButton text="<< Home" to="/" variant="text" />
                            </Grid>
                            
                            <Grid size={8}>
                                <HomeSectionHeading text="My Poems" />
                            </Grid>

                            <Grid size={2}></Grid>
                        </Grid>

                        <br />
                        <Grid container spacing={2}>
                            { 
                                sortByDateAndId(data).map(poem => (
                                    <Grid size={{ xs: 12, sm: 8, md: 6, lg: 3 }} key={poem.id}>
                                        <PoemCard poem={poem} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box>
                </OnScrollFadeInAnim>

                <DividerLine />
            </>
        )
}
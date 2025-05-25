'use client';

import { useState, useEffect } from 'react';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion } from 'framer-motion';

export default function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false);

    // Show button when scrolled beyond 300px
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 300,
    });

    useEffect(() => {
        setShowButton(trigger);
    }, [trigger]);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Zoom in={showButton}>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    position: 'fixed',
                    bottom: 20,
                    right: 20,
                    zIndex: 1000
                }}
            >
                <Fab
                    onClick={handleClick}
                    color="primary"
                    size="medium"
                    aria-label="scroll back to top"
                    sx={{
                        background: 'linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)',
                        boxShadow: '0 3px 15px rgba(0, 147, 233, 0.4)',
                        '&:hover': {
                            background: 'linear-gradient(45deg, #0093E9 40%, #80D0C7 100%)',
                            boxShadow: '0 6px 20px rgba(0, 147, 233, 0.5)',
                        },
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </motion.div>
        </Zoom>
    );
}
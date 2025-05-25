'use client';

import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper, TextField, IconButton, Fab, Backdrop } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import TerminalIcon from '@mui/icons-material/Terminal';
import CloseIcon from '@mui/icons-material/Close';

// Define Montserrat font for UI elements and monospace for terminal text
const montserratFont = 'Montserrat, sans-serif';
const terminalFont = '"Fira Code", "Roboto Mono", monospace';

type CommandResponse = {
    input: string;
    output: string | JSX.Element;
    isError?: boolean;
};

export default function InteractiveTerminal() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<CommandResponse[]>([
        {
            input: '',
            output: 'Welcome to the Karawang Developer Terminal. Type "help" to see available commands.'
        }
    ]);
    const [copied, setCopied] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    const availableCommands = ['help', 'about', 'events', 'contact', 'clear', 'repositories', 'join'];

    // Auto-scroll to bottom when history changes
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    // Focus input when opening terminal
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [isOpen]);

    // Focus input when clicking anywhere in the terminal
    const handleTerminalClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    // Handle command execution
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!input.trim()) return;

        const command = input.trim().toLowerCase();
        let response: CommandResponse;

        // Process commands
        switch (command) {
            case 'help':
                response = {
                    input,
                    output: (
                        <>
                            <Typography component="div" sx={{ mb: 1, fontFamily: terminalFont }}>
                                Available commands:
                            </Typography>
                            <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                {availableCommands.map(cmd => (
                                    <Box component="li" key={cmd} sx={{ fontFamily: terminalFont }}>
                                        {cmd}
                                    </Box>
                                ))}
                            </Box>
                        </>
                    )
                };
                break;

            case 'about':
                response = {
                    input,
                    output: 'Karawang Developer Community is a tech community focused on empowering developers in Karawang through events, workshops, and networking opportunities.'
                };
                break;

            case 'events':
                response = {
                    input,
                    output: (
                        <>
                            <Typography component="div" sx={{ mb: 1, fontFamily: terminalFont }}>
                                Upcoming events:
                            </Typography>
                            <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                <Box component="li" sx={{ fontFamily: terminalFont }}>
                                    Web Development Workshop - June 15, 2025
                                </Box>
                                <Box component="li" sx={{ fontFamily: terminalFont }}>
                                    Mobile App Development Hackathon - July 8-10, 2025
                                </Box>
                                <Box component="li" sx={{ fontFamily: terminalFont }}>
                                    AI and Machine Learning Seminar - August 5, 2025
                                </Box>
                            </Box>
                        </>
                    )
                };
                break;

            case 'contact':
                response = {
                    input,
                    output: 'Email: info@karawangdev.org | Twitter: @karawangdev | Instagram: @karawang_dev'
                };
                break;

            case 'repositories':
                response = {
                    input,
                    output: 'Our GitHub organization: https://github.com/karawang-dev'
                };
                break;

            case 'join':
                response = {
                    input,
                    output: 'Join our community by visiting: https://karawangdev.org/join'
                };
                break;

            case 'clear':
                setHistory([{
                    input: '',
                    output: 'Welcome to the Karawang Developer Terminal. Type "help" to see available commands.'
                }]);
                setInput('');
                return;

            case 'exit':
            case 'close':
                setIsOpen(false);
                return;

            default:
                response = {
                    input,
                    output: `Command not found: ${input}. Type "help" to see available commands.`,
                    isError: true
                };
        }

        setHistory(prev => [...prev, response]);
        setInput('');
    };

    // Copy terminal content to clipboard
    const handleCopy = () => {
        const text = history
            .map(item => {
                if (item.input) {
                    return `karawangdev $ ${item.input}\n${typeof item.output === 'string' ? item.output : 'Custom output'}\n`;
                }
                return `${typeof item.output === 'string' ? item.output : 'Custom output'}\n`;
            })
            .join('\n');

        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleClose = () => {
        setIsOpen(false);
        // Reset expanded state when closing
        setExpanded(false);
    };

    return (
        <>
            {/* Floating Button */}
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    left: 20,
                    zIndex: 1000,
                }}
            >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Fab
                        color="primary"
                        onClick={() => setIsOpen(true)}
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
                        <TerminalIcon />
                    </Fab>
                </motion.div>
            </Box>

            {/* Terminal Popup with Backdrop */}
            <Backdrop
                open={isOpen}
                sx={{
                    zIndex: 1200,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(4px)'
                }}
                onClick={handleClose}
            >
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                width: expanded ? '90vw' : '80vw',
                                maxWidth: expanded ? '1200px' : '900px',
                                maxHeight: expanded ? '90vh' : '70vh',
                                position: 'relative'
                            }}
                        >
                            <Paper
                                elevation={0}
                                onClick={handleTerminalClick}
                                sx={{
                                    width: '100%',
                                    height: expanded ? '80vh' : '500px',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    background: '#1E1E2E',
                                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.25)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid rgba(255, 255, 255, 0.05)'
                                }}
                            >
                                {/* Terminal Header */}
                                <Box
                                    sx={{
                                        px: 2,
                                        py: 1.5,
                                        background: 'linear-gradient(90deg, #0F111A 0%, #1E1E2E 100%)',
                                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ display: 'flex', gap: 1, mr: 2 }}>
                                            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#FF5F56' }} />
                                            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#FFBD2E' }} />
                                            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27C93F' }} />
                                        </Box>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontFamily: montserratFont,
                                                fontWeight: 600
                                            }}
                                        >
                                            Karawang Dev Terminal
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <IconButton
                                            size="small"
                                            onClick={handleCopy}
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                '&:hover': { color: 'rgba(255, 255, 255, 0.9)' }
                                            }}
                                            title="Copy terminal output"
                                        >
                                            {copied ? <DoneIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
                                        </IconButton>
                                        <IconButton
                                            size="small"
                                            onClick={() => setExpanded(!expanded)}
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                '&:hover': { color: 'rgba(255, 255, 255, 0.9)' },
                                                ml: 1
                                            }}
                                            title={expanded ? "Reduce size" : "Expand terminal"}
                                        >
                                            {expanded ? <CloseFullscreenIcon fontSize="small" /> : <OpenInFullIcon fontSize="small" />}
                                        </IconButton>
                                        <IconButton
                                            size="small"
                                            onClick={handleClose}
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                '&:hover': { color: '#FF5F56' },
                                                ml: 1
                                            }}
                                            title="Close terminal"
                                        >
                                            <CloseIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Box>

                                {/* Terminal Content */}
                                <Box
                                    ref={terminalRef}
                                    sx={{
                                        p: 2,
                                        overflowY: 'auto',
                                        flexGrow: 1,
                                        fontFamily: terminalFont,
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        fontSize: '0.9rem',
                                        '&::-webkit-scrollbar': {
                                            width: '8px',
                                        },
                                        '&::-webkit-scrollbar-track': {
                                            background: 'rgba(255, 255, 255, 0.05)',
                                        },
                                        '&::-webkit-scrollbar-thumb': {
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            borderRadius: '4px',
                                        },
                                        '&::-webkit-scrollbar-thumb:hover': {
                                            background: 'rgba(255, 255, 255, 0.2)',
                                        },
                                    }}
                                >
                                    {history.map((entry, index) => (
                                        <Box key={index} sx={{ mb: 2 }}>
                                            {entry.input && (
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        color: 'rgba(255, 255, 255, 0.9)',
                                                        mb: 0.5
                                                    }}
                                                >
                                                    <Typography
                                                        component="span"
                                                        sx={{
                                                            color: '#0093E9',
                                                            fontFamily: terminalFont,
                                                            fontWeight: 600,
                                                            mr: 1
                                                        }}
                                                    >
                                                        karawangdev $
                                                    </Typography>
                                                    <Typography
                                                        component="span"
                                                        sx={{
                                                            fontFamily: terminalFont,
                                                        }}
                                                    >
                                                        {entry.input}
                                                    </Typography>
                                                </Box>
                                            )}
                                            <Box
                                                sx={{
                                                    fontFamily: terminalFont,
                                                    color: entry.isError ? '#FF5F56' : 'rgba(255, 255, 255, 0.8)',
                                                    lineHeight: 1.6,
                                                    ml: entry.input ? 2 : 0
                                                }}
                                            >
                                                {entry.output}
                                            </Box>
                                        </Box>
                                    ))}

                                    {/* Current input line */}
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography
                                            component="span"
                                            sx={{
                                                color: '#0093E9',
                                                fontFamily: terminalFont,
                                                fontWeight: 600,
                                                mr: 1
                                            }}
                                        >
                                            karawangdev $
                                        </Typography>
                                        <form onSubmit={handleSubmit} style={{ flexGrow: 1 }}>
                                            <TextField
                                                inputRef={inputRef}
                                                value={input}
                                                onChange={(e) => setInput(e.target.value)}
                                                variant="standard"
                                                fullWidth
                                                autoFocus
                                                sx={{
                                                    '& .MuiInputBase-input': {
                                                        fontFamily: terminalFont,
                                                        color: 'rgba(255, 255, 255, 0.9)',
                                                        caretColor: '#FE6B8B',
                                                        fontSize: '0.9rem',
                                                        padding: 0,
                                                    },
                                                    '& .MuiInput-underline:before': {
                                                        borderBottom: 'none'
                                                    },
                                                    '& .MuiInput-underline:after': {
                                                        borderBottom: 'none'
                                                    },
                                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                                        borderBottom: 'none'
                                                    }
                                                }}
                                                inputProps={{
                                                    spellCheck: false,
                                                    autoCapitalize: 'none',
                                                    autoComplete: 'off',
                                                    autoCorrect: 'off'
                                                }}
                                            />
                                        </form>
                                    </Box>

                                    {/* Blinking cursor */}
                                    <Box
                                        component="span"
                                        sx={{
                                            display: 'inline-block',
                                            width: '8px',
                                            height: '16px',
                                            backgroundColor: '#FE6B8B',
                                            animation: 'blink 1s step-end infinite',
                                            '@keyframes blink': {
                                                '0%, 100%': {
                                                    opacity: 1
                                                },
                                                '50%': {
                                                    opacity: 0
                                                }
                                            }
                                        }}
                                    />
                                </Box>

                                {/* Terminal footer */}
                                <Box
                                    sx={{
                                        p: 1.5,
                                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                                        background: 'linear-gradient(90deg, #0F111A 0%, #1E1E2E 100%)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.5)',
                                            fontFamily: montserratFont,
                                            fontSize: '0.75rem'
                                        }}
                                    >
                                        Type "exit" or "close" to close the terminal
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.5)',
                                            fontFamily: montserratFont,
                                            fontSize: '0.75rem'
                                        }}
                                    >
                                        Karawang Developer Community © {new Date().getFullYear()}
                                    </Typography>
                                </Box>
                            </Paper>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Backdrop>
        </>
    );
}
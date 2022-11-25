import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Bannerview = () => {
    
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


  return (
    <>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography sx={{ width: '33%', flexShrink: 0, fontSize: 18, color: '#1abc9c' }}>
                    General settings
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: 16 }}>
                    I am an accordion
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography  sx={{fontSize: 16}}>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                    Aliquam eget maximus est, id dignissim quam.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion 
            expanded={expanded === 'panel2'} 
            onChange={handleChange('panel2')}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
            >
                <Typography sx={{ width: '33%', flexShrink: 0, fontSize: 18, color: '#1abc9c'  }}>
                    Users
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: 16 }}>
                    You are currently not an owner
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography  sx={{fontSize: 16}}>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                    varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                    laoreet.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion 
            expanded={expanded === 'panel3'} 
            onChange={handleChange('panel3')}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
            >
                <Typography sx={{ width: '33%', flexShrink: 0, fontSize: 18, color: '#1abc9c'  }}>
                    Advanced settings
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: 16 }}>
                    Filtering has been entirely disabled for whole web server
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography  sx={{fontSize: 16}}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion 
            expanded={expanded === 'panel4'} 
            onChange={handleChange('panel4')}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
            >
                <Typography sx={{ width: '33%', flexShrink: 0, fontSize: 18, color: '#1abc9c'  }}>
                    Personal data
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{fontSize: 16}}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </>
  )
}

export default Bannerview
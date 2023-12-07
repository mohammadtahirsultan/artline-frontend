import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

export default function FAQSection() {

    const options = {
        initial: {
            y: 200,
            opacity: 0,
        },
        whileInView: {
            y: 0,
            opacity: 1,
        },
        transition: { delay: .2 },
    };

    return (
        <div className='flex flex-col justify-center items-center marginBt'>
            <motion.div {...options} class="section-title">
                <h2>Frequently Asked Questions</h2>
            </motion.div>
            <motion.div {...options}>
                <Accordion  className='bg-red-500 text-white max-Wdth'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>What we need to get started for Web Development?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        We need your business information, your logo, content (if available) , a sample website that you really like . and we are ready to start.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </motion.div>
            <motion.div {...options}>
                <Accordion className='bg-red-500 text-white max-Wdth'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>What we need to get started for Graphics Designing?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Company Name/ Logo Brief description of your business I need the following to get started; Wireframe/Sketch (If you have, Otherwise no issue) Content/Text (If you have) Your Branding/ Color Schemes Competitors Landing pages you like
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </motion.div>
            <motion.div {...options}>
                <Accordion  className='bg-red-500 text-white max-Wdth'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Do i have full copyrights ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Yeah, every content that we made is totally new , and you will have full copyrights of the source code.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </motion.div>
            <motion.div {...options}>
                <Accordion  className='bg-red-500 text-white max-Wdth'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Are you available for any custom work ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            We love to work on custom complex Websites, Please feel free to contact with us about any custom website Project.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </motion.div>
            <motion.div {...options}>
                <Accordion  className='bg-red-500 text-white max-Wdth'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Can i Pick Any design inspiration ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            yes, you can show us any design that you like , and we will build an awesome website Design for you, We also have an extensive Website Design Library to show you as well.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </motion.div>
            <motion.div {...options}>
                <Accordion  className='bg-red-500 text-white max-Wdth'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Do you provide domain and hosting ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            No, We don't provide Domain and hosting, however we will recommend you good hosting / domain provider, and will also help you to configure it correctly.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </motion.div>
        </div>
    );
}

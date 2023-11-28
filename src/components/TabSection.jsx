import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

const TabSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
    <motion.section
      {...options}
      id="tabs" className="tabs">
      <div className="container" data-aos="fade-up">
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            className="nav nav-tabs row d-flex"
          >
            <Tab label="Process" icon={<i className="ri-gps-line" />} />
            <Tab label="Discuss The Scope Of Project" icon={<i className="ri-body-scan-line" />} />
            <Tab label="Sealing The Deal" icon={<i className="ri-sun-line" />} />
            <Tab label="Business Insight & Estimation" icon={<i className="ri-store-line" />} />
          </Tabs>
        </Box>

        <div

          className="tab-content">
          <TabPanel value={value} index={0}>
            <div className="row">
              <motion.div
                {...options}
                className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay={100}>
                <h3>Process</h3>
                <div>
                  <p> Experience the authenticity-driven journey of product development, just like the inaugural 1.0 version, with our step-by-step approach.
                    At Artline, safeguarding your idea is our utmost priority. <br />
                  </p>
                  <p>An NDA ensures mutual understanding and trust. Following our project discussion and estimation, the next step is signing a project development agreement.</p>
                  <p> This agreement forms the cornerstone of our partnership with Artline, encompassing program deliverables, objectives, legal requirements, and references.</p>
                </div>
                {/* ... */}
              </motion.div>
              <motion.div
                {...options}
                className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay={200}>
                <img src="tabs-1.jpg" alt className="img-fluid" />
              </motion.div>
            </div>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Discuss The Scope Of Project</h3>
                <p>We will initially have a Normal, Friendly, Quick Phone Call just to find out how we can help you with the project. We have an on-call meeting with our sales representative team to ask questions associated with the concept of the app & the surrounding areas
                </p></div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="tabs-2.jpg" alt className="img-fluid" />
              </div>
            </div>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Sealing The Deal</h3>
                <p>It's time to make things official. Following the evaluation of test cases and cost estimates, we proceed to the formal signing of the agreement and NDA, marking the next step in your custom mobile or web app development journey.</p>

              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="tabs-3.jpg" alt className="img-fluid" />
              </div>
            </div>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Business Insight & Estimation</h3>
                <p> Our journey begins with a kickoff meeting, where we align the project team and offer data-driven insights for optimized app development. Early QA involvement ensures data collection from the outset.</p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="tabs-4.jpg" alt className="img-fluid" />
              </div>
            </div>
          </TabPanel>
        </div>
      </div>
    </motion.section>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
};

export default TabSection;

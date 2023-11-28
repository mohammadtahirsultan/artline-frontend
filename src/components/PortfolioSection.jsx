import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "@/redux/actions/project";
import Item from "./Item";
import { motion } from 'framer-motion';

const PortfolioSection = () => {
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
    const dispatch = useDispatch();
    const [value, setValue] = useState("all");
    const { projects } = useSelector((state) => state.project);
    const breakPoint = useMediaQuery("(min-width:600px)");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(getAllProjects())
    }, []);

    const WebDevelopment = projects?.filter(
        (item) => item?.category === "Web Development"
    );
    const GraphicsDesigning = projects?.filter(
        (item) => item?.category === "Graphics Designing"
    );
    const DigitalMarketing = projects?.filter(
        (item) => item?.category === "Digital Marketing"
    );

    return (
        <Box width="80%" margin="80px auto">
            <div className="section-title">
                <h2>Portfolio</h2>
                <p>Some of Our Portfolio Work in Different Categories</p>
            </div>
            <motion.div
                {...options}
            >
                <Tabs
                    textColor="primary"
                    indicatorColor="primary"
                    value={value}
                    onChange={handleChange}
                    centered
                    TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
                    sx={{
                        m: "25px",
                        "& .MuiTabs-flexContainer": {
                            flexWrap: "wrap",
                        },
                    }}
                >
                    <Tab label="ALL" value="all" />
                    <Tab label="Graphics Desiging" value="newArrivals" />
                    <Tab label="Web Development" value="topRated" />
                    <Tab label="Digital Marketing" value="bestSellers" />
                </Tabs>
            </motion.div>
            <Box
                margin="0 auto"
                display="grid"
                gridTemplateColumns="repeat(auto-fill, 300px)"
                justifyContent="space-around"
                rowGap="20px"
                columnGap="1.33%"
            >
                {value === "all" &&
                    projects?.map((item) => (
                        <div {...options} key={`${item?.title}-${item?._id}`} >
                            <Item item={item} key={`${item?.title}-${item?._id}`} />
                        </div>
                    ))}
                {value === "newArrivals" &&
                    GraphicsDesigning?.map((item) => (
                        <Item item={item} key={`${item?.title}-${item?._id}`} />
                    ))}
                {value === "bestSellers" &&
                    DigitalMarketing?.map((item) => (
                        <Item item={item} key={`${item?.title}-${item?._id}`} />
                    ))}
                {value === "topRated" &&
                    WebDevelopment?.map((item) => (
                        <Item item={item} key={`${item?.title}-${item?._id}`} />
                    ))}
            </Box>
        </Box >
    );
};

export default PortfolioSection;



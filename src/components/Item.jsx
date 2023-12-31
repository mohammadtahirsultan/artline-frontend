import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { motion } from 'framer-motion';

const Item = ({ item, width }) => {
    const router = useRouter();
    const navigate = (itemId) => {
        router.push(`/${itemId}`);
    };

    const { title, category,description } = item;

    const options = {
        initial: {
            y: 200,
            opacity: 0,
        },
        whileInView: {
            y: 0,
            opacity: 1,
        },
        transition: { delay: .5 },
    };
    return (
        <motion.div
            {...options}
        >
            <Box width={width}>
                <Box
                    position="relative">
                    <img
                        alt={item.name}
                        width="300px"
                        height="400px"
                        src={item?.image[0]?.url}
                        onClick={() => navigate(`/${item._id}`)}
                        style={{ cursor: "pointer" }}
                    />
                </Box>

                <Box mt="3px">
                    <Typography variant="subtitle2">
                        {category
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, (str) => str.toUpperCase())}
                    </Typography>
                    <h3 className="text-xl md:text-[2rem] font-semibold">{title}</h3>
                    <p className="text-gray-200">{description}</p>
                    {/* <Typography fontWeight="bold">${price}</Typography> */}
                </Box>
            </Box>
        </motion.div>
    );
};

export default Item;

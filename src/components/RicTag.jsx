import { motion } from "framer-motion";

const RicTag = () => {
    return (
        <motion.a
            href="https://ricciviero.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="m-2 group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-gray-50 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_25px_rgb(0,0,0,0.18)]"
            aria-label="Made by Ricciviero"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
                type: 'spring',
                stiffness: 400,
                damping: 17
            }}
        >

            <motion.span
                className="font-bold text-sm text-gray-700 group-hover:text-black"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
                made by <span className="text-indigo-600">ricciviero</span>
            </motion.span>
        </motion.a>
    );
};

export default RicTag;

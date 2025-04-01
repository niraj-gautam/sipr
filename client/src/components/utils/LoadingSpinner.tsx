import React from "react";
import { motion } from "framer-motion";

interface LoadingSpinnerProps {
    size?: "sm" | "md" | "lg";
    message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = "md",
    message = "Loading...",
}) => {
    const sizes = {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-16 h-16",
    };

    const textSizes = {
        sm: "text-base",
        md: "text-lg",
        lg: "text-xl",
    };

    return (
        <div className="flex items-center justify-center">
            <div className="text-center">
                <motion.div
                    className={`${sizes[size]} rounded-full border-4 border-[#8c1616] border-t-transparent mx-auto mb-4`}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <p
                    className={`${textSizes[size]} font-['Montserrat'] text-gray-600`}
                >
                    {message}
                </p>
            </div>
        </div>
    );
};

export default LoadingSpinner;

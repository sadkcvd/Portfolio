export const handleCopy = (setIsCopied) => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
};
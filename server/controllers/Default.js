export const getDefault = (req, res) => {
    try {
        res.status(200).json({ message: "Running" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

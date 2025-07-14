import connectDB from "../db/mongoose.js";
import mongoose from "mongoose";

connectDB();

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export const userController = () => {
    const login = async (req, res) => {
        const { username, password } = req.body;
        try {
            const user = await User.findOne({ username });
            if (!user) {
                return res.status(401).send({ message: "Invalid credentials" });
            }
            // In production, use hashed passwords and compare with bcrypt
            if (user.password !== password) {
                return res.status(401).send({ message: "Invalid credentials" });
            }
            res.send({ message: "Login successful" });
        } catch (error) {
            res.status(500).send({ message: "Server error", error: error.message });
        }
    };

    return {
        login
    };
};

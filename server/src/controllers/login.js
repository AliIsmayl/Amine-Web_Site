import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { Users } from "../models/login.js";
const PrivateKey = "wexvlj@!@#$!__++=";

// ----------------------REGISTER-----------------------------
export async function Register(req, res) {
    try {
      const findedUser = await Users.findOne({ username: req.body.username });
      if (findedUser) {
        res.send("Username already exist!! Try other Username");
        return;
      } else {
        const { username } = req.body;
        const hashedPassword = await hash(req.body.password, 10);
        const user = new Users({
          username,
          password: hashedPassword,
          isAdmin: false,
        });
        await user.save();
        // const token = jwt.sign(
        //   {
        //     _id: user._id,
        //     username: user.username,
        //     isAdmin: user.isAdmin,
        //   },
        //   PrivateKey
        // );
        res.status(200).send("User created");
      }
    } catch (error) {
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  }
// --------------------------LOGIN--------------------------------------------

export async function Login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await Users.findOne({ username: username });
    const passwordMatch = await compare(password, user.password);
    if (!user) {
      res.status(404).send("Yanlış kullanici");
      return;
    } else if (!passwordMatch) {
      res.status(404).send("Yanlış Parola");
      return;
    }
    const token = jwt.sign(
      { _id: user._id, username: user.username, isAdmin: user.isAdmin },
      PrivateKey // Burada PrivateKey yerine gerçek özel anahtarınızı kullanmalısınız
    );
    res.status(200).send(token);
  } catch (error) {
    res.status(500).send("İç Sunucu Hatası");
  }
}

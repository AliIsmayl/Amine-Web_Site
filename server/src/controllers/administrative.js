import Administrative from "../models/administrative.js";
import upload from "../middleware/multer.js";
import cloudinary from "../utils/cloudinary.js";

export const createAdministrative = async (req, res) => {
  try {
    upload.fields([{ name: "image" }])(req, res, async function (err) {
      if (err) {
        console.error(err);
        return res.status(400).json({ message: err.message });
      }
      const { image, title, position } = req.body;

      const AdministrativeResult = req.files["image"][0];
      const AdministrativeUpload = cloudinary.uploader.upload(
        AdministrativeResult.path,
        { folder: "Administrative" }
      );

      const [AdministrativeResponse] = await Promise.all([
        AdministrativeUpload,
      ]);

      const newAdministrative = new Administrative({
        image: AdministrativeResponse.secure_url,
        title: title,
        position: position,
      });

      await newAdministrative.save();

      res.status(200).send("Create New Administrative");
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const getAllAdministrative = async (req, res) => {
  try {
    const administrative = await Administrative.find({});
    res.json(administrative);
  } catch (error) {
    res.status(500).json({ messsage: error });
  }
};

export const updateAdministrative = async (req, res) => {
  try {
    upload.fields([{ name: "image" }])(req, res, async function (err) {
      if (err) {
        console.error(err);
        return res.status(400).json({ message: err.message });
      }
      try {
        const updatedAdministrative = await Administrative.findByIdAndUpdate(
          req.params.id,
          { ...req.body },
          { new: true }
        );

        if (updatedAdministrative) {
          const { image } = req.body;

          if (req.files["image"]) {
            const AdministrativeResult = req.files["image"][0];
            const AdministrativeUpload = cloudinary.uploader.upload(
              AdministrativeResult.path,
              { folder: "Administrative" }
            );
            const [AdministrativeResponse] = await Promise.all([
              AdministrativeUpload,
            ]);
            updatedAdministrative.image = AdministrativeResponse.secure_url;
          }

          if (image) updatedAdministrative.image = image;

          await updatedAdministrative.save();

          res.status(200).json(updatedAdministrative);
        } else {
          res.status(404).json({
            message: "Güncellenmek istenen Administrative bulunamadı.",
          });
        }
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAdministrative = async (req, res) => {
  try {
    const { id } = req.params;
    const administrative = await Administrative.findByIdAndDelete(id);
    res.status(200).json("deleted");
  } catch (error) {
    res.status(500).json({ messsage: error });
  }
};

export const getByIdAdministrative = async (req, res) => {
  try {
    const { id } = req.params;
    const administrative = await Administrative.findById(id);
    res.json(administrative);
  } catch (error) {
    res.status(500).json({ messsage: error });
  }
};

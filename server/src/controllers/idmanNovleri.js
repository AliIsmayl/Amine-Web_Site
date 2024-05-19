import IdmanNovleris from "../models/idmanNovler.js";


export const createIdmanNovleri=async(req,res)=>{
    try {
        const idmanNovleri=new IdmanNovleris({
          ...req.body
        })
        await idmanNovleri.save()
        res.status(200).json(idmanNovleri)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const getIdmanNovleri=async(req,res)=>{
    try {
        const idmanNovleri=await IdmanNovleris.find({})
        res.json(idmanNovleri)
    } catch (error) {
        res.status(500).json({messsage:error})
    }
}

export const updateIdmanNovleri = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        // Try updating the top-level document
        let idmanNovleri = await IdmanNovleris.findByIdAndUpdate(id, updatedData, { new: true });

        // If not found, try updating a subdocument within the Alt array
        if (!idmanNovleri) {
            idmanNovleri = await IdmanNovleris.findOneAndUpdate(
                { 'Alt._id': id },
                { $set: { 'Alt.$': updatedData } },
                { new: true }
            );
        }

        // If still not found, return 404
        if (!idmanNovleri) {
            return res.status(404).json({ message: "IdmanNovleri not found" });
        }

        res.status(200).json(idmanNovleri);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const deleteIdmanNovleri = async (req, res) => {
    try {
        const { id } = req.params;

        // Try deleting the top-level document
        let idmanNovleri = await IdmanNovleris.findByIdAndDelete(id);

        // If not found, try deleting a subdocument within the Alt array
        if (!idmanNovleri) {
            idmanNovleri = await IdmanNovleris.findOneAndUpdate(
                { 'Alt._id': id },
                { $pull: { Alt: { _id: id } } },
                { new: true }
            );
        }

        // If still not found, return 404
        if (!idmanNovleri) {
            return res.status(404).json({ message: "IdmanNovleri not found" });
        }

        res.status(200).json({ message: "IdmanNovleri deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getByIdIdmanNovleri = async (req, res) => {
    try {
        const { name } = req.params;

        // First, try to find a document where the name matches in the main document
        let idmanNovleri = await IdmanNovleris.findOne({ name });

        // If not found in main document, search in the Alt array
        if (!idmanNovleri) {
            idmanNovleri = await IdmanNovleris.findOne({
                'Alt.name': name
            }, {
                'Alt.$': 1
            });

            if (idmanNovleri && idmanNovleri.Alt && idmanNovleri.Alt.length > 0) {
                idmanNovleri = idmanNovleri.Alt[0]; // Get the matched Alt item
            }
        }

        // If still not found, return 404
        if (!idmanNovleri) {
            return res.status(404).json({ message: "IdmanNovleri not found" });
        }

        res.json(idmanNovleri);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

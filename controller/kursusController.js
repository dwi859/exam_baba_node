const Kursus = require('../models/kursus')
const jwt = require("jsonwebtoken")

exports.home = (req,res) =>{
    res.send("welcome to API Shop")

}

// exports.listKursus = async (req, res) => {
//     jwt.verify(req.token, "secretkey", async (err, authData) => {
//         if (!err) {
//             let data = await Kursus.find()
//             res.send(JSON.stringify({ "status": 200, "error": null, "response": data }))
//         }
//         else {
//             res.sendStatus(403)
//         }
//     })
// }

exports.listKursus = async(req,res) => {
    let data = await Kursus.find()
 
    res.send(JSON.stringify({"status" :200, "error" : null, "response" :data}))
}

exports.detailKursus = async (req,res) => {
    const data = await Kursus.findById(req.params.id)
    res.send(JSON.stringify({ "status" : 200, "error" : null, "response" :data}))
}

exports.tambahKursus = async(req,res) => {
    
  
    const harga = Number.parseInt(req.body.harga)
    const total_durasi = Number.parseInt(req.body.total_durasi)
    const total_murid = Number.parseInt(req.body.total_murid)
    const jumlah_video = Number.parseInt(req.body.jumlah_video)
    const image = req.body.image
    const nama_kursus = req.body.nama_kursus
    if(harga >= 5000000){
        const data = {
            total_durasi : total_durasi,
            total_murid : total_murid,
            jumlah_video : jumlah_video,
            image : image,
            nama_kursus : nama_kursus,
            harga : harga,
            diskon : harga - (((20/100) * harga) - 100000)
        }
        const carts = new Kursus(data)
        const status = await carts.save()
        res.send(JSON.stringify({"status" : 200, "error" :null, "response" : status}))
    }else{
        const data = {
            total_durasi : total_durasi,
            total_murid : total_murid,
            jumlah_video : jumlah_video,
            image : image,
            nama_kursus : nama_kursus,
            harga : harga,
            diskon : harga - 0 
        }
        const carts = new Kursus(data)
        const status = await carts.save()
        res.send(JSON.stringify({"status" : 200, "error" :null, "response" : status}))
    }
   
}

exports.ubahKursus = async(req,res) => {
    const {id} = req.params
    // const {id} = req.params
    const harga = Number.parseInt(req.body.harga)
    const total_durasi = Number.parseInt(req.body.total_durasi)
    const total_murid = Number.parseInt(req.body.total_murid)
    const jumlah_video = Number.parseInt(req.body.jumlah_video)
    const image = req.body.image
    const nama_kursus = req.body.nama_kursus
    if(harga >= 5000000){
        const data = {
            total_durasi : total_durasi,
            total_murid : total_murid,
            jumlah_video : jumlah_video,
            image : image,
            nama_kursus : nama_kursus,
            harga : harga,
            diskon : harga - (((20/100) * harga) - 100000)
        }
        const carts = data
        const status = await Kursus.update({_id : id}, carts)
        res.send(JSON.stringify({"status" : 200, "error" :null, "response" : status}))
    }
    else{
        const data = {
            total_durasi : total_durasi,
            total_murid : total_murid,
            jumlah_video : jumlah_video,
            image : image,
            nama_kursus : nama_kursus,
            harga : harga,
            diskon : harga - 0 
        }
        const carts = data
        const status = await Kursus.update({_id : id}, carts)
        res.send(JSON.stringify({"status" : 200, "error" :null, "response" : status}))
    }
    // const status = await Kursus.update({_id : id}, req.body)
    // res.send(JSON.stringify({"status" : 200, "error" :null, "response" : status}))
}

exports.hapusKursus = async(req,res) => {
    const { id } = req.params
    const status = await Kursus.remove({_id : id})
    res.send(JSON.stringify({"status" : 200, "error" :null, "response" : status}))
}
const path = require("path");
const Songs = require(path.resolve('./models/Songs'));

module.exports.getSongs = (req, res) => {
  
  Songs.find()
  .then(data => {
    if (data) 
      return res.status(200).json(data)
    return res.status(200).json(null)
  })
  .catch(err => console.log(err))
   
}

module.exports.updateRating = (req, res) => {

  const { id, rating } = req.params
  // console.log(id,rating)
  // avoid NaN while saving the rating
  if (isNaN(parseInt(rating)))
    return res.status(400).json("Select some rating")
  Songs.updateOne(
    { _id: id },
    { $set: { rating } }
  )
    .then(
      () => Songs.findById(id)
      .then(song => res.json(song))
    )

}

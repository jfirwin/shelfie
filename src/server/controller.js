module.exports = {
  get_shelfie: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.get_shelfie()
      .then(shelfie => res.status(200).send(shelfie))
      .catch(error => console.log(error))
  },

  add_bin: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;
    dbInstance.add_bin({ id })
      .then(bin => res.status(200).send(bin))
      .catch(error => console.log(error))
  },

  update_bin: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;
    dbInstance.update_bin({ id })
      .then(bin => res.status(200).send(bin))
      .catch(error => console.log(error))
  }
}

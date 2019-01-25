module.exports = {
    getInventory : (req,res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory()
          .then( inventory => res.status(200).send(inventory) )
          .catch( err => {
            res.status(500).send({errorMessage: "Someting went wrong. Skynet is currently working on the issue at hand"});
            console.log(err)
          } );
    },

    addProduct : (req,res) => {
        const dbInstance = req.app.get('db');
        const {url, name, price} = req.body

        dbInstance.create_product([url, name, price])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Someting went wrong. Skynet is currently working on the issue at hand"});
            console.log(err)
        });
    },

    deleteProduct : (req,res) => {
        const dbInstance = req.app.get('db');
        const id = req.params.id.split('')[1]

        dbInstance.delete_product(id)
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Someting went wrong. Skynet is currently working on the issue at hand"});
            console.log(err)
          } );

    }

        

}
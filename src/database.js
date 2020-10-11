const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/mongonode', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => {
        console.log(`Database connected to ${db.connection.host}`);
    })
    .catch(err => {
        console.log(err);
    });

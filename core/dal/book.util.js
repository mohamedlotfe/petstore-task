const connection = require('../../db/mongodb');
const Book = require('../../db/models/Book')

module.exports = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            try {
                Book.BindModel(connection, (BookModel) => {
                    BookModel.find({}, { '_id': 0 }).then(res => {
                        resolve(res.map(a => a.toObject()))
                    }).catch(error => {
                        reject({ error })
                    })
                })
            } catch (error) {
                reject({ error })
            }
        });
    },

    create: (book) => {
        return new Promise((resolve, reject) => {
            try {
                Book.BindModel(connection, (BookModel) => {
                    BookModel.create(book).then(res => {
                        resolve(res.toObject())
                    }).catch(error => {
                        reject({ error })
                    })
                })
            } catch (error) {
                reject({ error })
            }
        });
    },
    update: (id, title, author, description) => {
        return new Promise((resolve, reject) => {
            try {
                Book.BindModel(connection, (BookModel) => {
                    BookModel.findOneAndUpdate({ id },
                        { "title": title, "author": author, "description": description },
                        { useFindAndModify: false, new: true }).then(res => {
                            resolve(res)
                        }).catch(error => {
                            reject({ error })
                        })
                })
            } catch (error) {
                reject({ error })
            }
        });
    },
    search: (text) => {
        return new Promise((resolve, reject) => {
            try {
                Book.BindModel(connection, (BookModel) => {
                    BookModel.find({ title: text }, { '_id': 0, 'id': 0, "__v": 0 })
                        .then(res => {
                            resolve(res ? res.map(a => a.toObject()) : []);
                        }).catch(error => {
                            reject({ error })
                        })
                })
            } catch (error) {
                reject({ error })
            }
        });
    },
}
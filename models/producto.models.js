const { executeQuery } = require("./helpers")

const getAll = () => {
    return executeQuery('select * from productos')
}


module.exports = { getAll }
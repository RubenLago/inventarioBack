/* devuelve todo */
const executeQuery = (sql, arrValues = []) => {
    return new Promise((resolve, reject) => {
        db.query(
            sql, arrValues, (err, result) => {
                if (err) reject(err);
                resolve(result)
            }
        )
    })
}

/* devuelve un producto */
module.exports = { executeQuery }
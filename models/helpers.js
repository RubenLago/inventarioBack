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

const executeQueryUnique = (sql, arrValues = []) => {
    return new Promise((resolve, reject) => {
        db.query(
            sql, arrValues, (err, result) => {
                if (err) reject(err);
                if (!result.length) {
                    resolve(result)
                } else { resolve(result[0]) }
            }
        )
    })
}

module.exports = { executeQuery, executeQueryUnique }
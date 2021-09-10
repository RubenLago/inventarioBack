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
        db.query(sql,
            arrValues,
            (err, result) => {
                if (err) reject(err);
                if (result.length !== 1) resolve(null);
                resolve(result[0]);
            }
        )
    })
}


/* devuelve un producto */
module.exports = {
    executeQuery, executeQueryUnique
}
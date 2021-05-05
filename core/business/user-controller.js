const connection = require('../../db/mysql');
const { v4: uuidv4 } = require('uuid');
module.exports = {
    addEmployee: (employee, calback) => {
        let { emp_no = uuidv4().replace("-", ""), first_name, last_name, gender, birth_date, hire_date } = employee;

        let query = `INSERT INTO employees (emp_no,first_name,last_name,gender, birth_date, hire_date) 
                    VALUES ('${emp_no}','${first_name}', '${last_name}', '${gender}', str_to_date('${birth_date}','%d-%m-%Y'), str_to_date('${hire_date}','%d-%m-%Y'));`
        connection.query(query, function (err, rows, fields) {
            if (err) return calback({ err, res: [] })
            return calback({ err, res: rows })
        })

    },
    //Create a nodejs function that retrieves list of employees who are aged between 63-65 years 
    //and having salaries greater than 100010 ordered by employee salary 
    //and the third letter employee first name is 'n'
    getSalary: (calback) => {

        let query = `SELECT *
        FROM employees e 
        JOIN salaries s USING (emp_no)
        WHERE e.first_name LIKE '__n' 
        AND YEAR(CURDATE()) - YEAR(birth_date) BETWEEN 63 AND 65
        AND s.salary > 100010`
        connection.query(query, function (err, rows, fields) {
            if (err) return calback({ err, res: [] })
            return calback({ err, res: rows })
        })
    }
}
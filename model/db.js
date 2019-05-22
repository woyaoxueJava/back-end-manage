//operate database

//mysql injection

const mysql = require('mysql');

//create connection

module.exports = {
    query(sqlStr,callback) {


        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'alibaixiu'
        });
        
        //get through connection
        
        connection.connect();
        
        //mysql query
        
        connection.query(sqlStr,(err,results) => {
            //对数据库数据进行处理,这个处理交由c中以参数形式传递的回调函数
            callback(err,results);
            //回调函数能访问那些变量由定义这个函数的环境决定，而不是调用的环境决定（为什么这里回调函数能够访问res和req）
        });
        
        connection.end();
    }

}

//************ */
// let sql = ` SELECT 
//             posts.*,users.nickname, categories.name  
//             FROM posts LEFT JOIN users ON 
//             posts.user_id = users.id 
//             LEFT JOIN categories ON 
//             posts.category_id = categories.id 
//             ORDER BY posts.id desc LIMIT ${(page - 1) * pagesize}, ${pagesize};
//             SELECT count(*) FROM posts `

// var fakeSql = `select
//                posts.*, users.nickname, categories.name
//                from posts 
//                left join users 
//                on posts.user_id = users.id
//                left join categories 
//                on posts.category_id = categoyies.id
//                order by posts.id desc
//                limit ${(page -1)*pagesize}, ${pagesize}
//                select count(*) from posts `
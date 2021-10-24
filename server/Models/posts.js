let database = require ('../../db/index.js');

let getPosts = (page_id, callback) => {
  let retArray = [];
  database.query(`SELECT * FROM posts WHERE page_id=${page_id}`, (err,result) => {
    if (err) {
      callback(err, null);
    } else {
      result.map((row) => {
        retArray.push({ ...row});
      })
      callback(null retArray);
    }
  })
};

let createPost = (post_title, post_body, page_id, creation_time, username, callback) => {
  database.query(`INSERT INTO posts(post_title, post_body, points, page_id, creation_time, comment_count, username) VALUES ('${post_title}', '${post_body}', 0, ${page_id}, ${creation_time}, 0, '${username}')`, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
};

const deletePost = (post_id, callback) => {
  database.query(`DELETE from posts WHERE post_id = '${post_id}'`, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  });
};

let editPost = (post_id, post_title, post_body, callback) => {
  database.query(`UPDATE posts SET post_title='${post_title}', post_body='${post_body}' WHERE post_id=${post_id}`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

let addPoints = (post_id, callback) => {
  database.query(`UPDATE posts SET points = points + 1 WHERE post_id = ${post_id}'`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}

let deletePoints = (post_id, callback) => {
  database.query(`UPDATE posts SET points = points - 1 WHERE post_id=${post_id}`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result)
    }
  });
}


let updatePostUsername = (post_id, username ,callback) => {
  database.query(`UPDATE posts SET username=${username} WHERE post_id = ${post_id}'`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}


//  TESTS

// getPosts(3, (err, result) => {
//   if (err) {
//     console.error('error getting posts');
//   } else {
//     console.log(result);
//   }
// });

  // getPosts(1, (err, result) => {
  //   if (err) {
  //     console.error('error getting posts');
  //   } else {
  //     console.log(result);
  //   }
  // });

  // addPost(5, "test add Post", "This is a test for a test post", 3, 3, "2021-10-20 04:04:50", 0, "person5", (err, result) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     console.log(result);
  //   }
  // });

  // deletePost(5, (err, result) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     console.log(result);
  //   }
  // });

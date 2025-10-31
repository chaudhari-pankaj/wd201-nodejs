// const fetchUserDetails = (userId,callback) => {
//     console.log("fetching user details");
//     setTimeout(() => {callback(`/${userId}.png`)},1000);    
// }


// const downloadImage = (url,callback) => {
//     console.log(`downloaded image from ${url}`);
//     setTimeout(() => {callback("image-data for url")},1000);
// }

// const render = (image, callback) => {
//     console.log(image);
//     setTimeout(() => {callback("image rendered")},1000);
// }

// fetchUserDetails(3000,(imageurl) => {
//     downloadImage(imageurl,(imagedata) => {
//         render(imagedata,(message) => {
//             console.log(message);
//         })
//     })
// })

// const fetchUserDetails = (userId) => {
//     console.log("fetching user details");
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(`/${userId}.png`);
//         }, 1000);
//     })
// }

// const downloadImage = (url) => {
//     console.log(`downloaded image from ${url}`);
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("image-data");
//         },1000);
//     });
// }

// const render = (image) => {
//     console.log(image);
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("image_rendered");
//         },1000);
//     });
// }

// fetchUserDetails(3000)
// .then((image_url) => {return downloadImage(image_url);})
// .then((image_data) => {return render(image_data);})
// .then((message) => {return console.log(message);})
// .catch((err) => {console.log(err);});

const time = async (ms) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        },ms);
    });
};

const fetchUserDetails = async (userId) => {
    console.log("fetching image_url");
    await time(1000);
    return  `/${userId}.png`;
}

const downloadImage = async (image_url) => {
    console.log("downloading image");
    await time(1000);
    return `image_data`;
}

const render = async (image_data) => {
    console.log("rendering image");
    await time(1000);
    return `${image_data}`;
}

const call = async() => {
    let image_url = await fetchUserDetails(2000);
    let image_data = await downloadImage(image_url);
    let image = await render(image_data);
    console.log(image);
}
    
call();

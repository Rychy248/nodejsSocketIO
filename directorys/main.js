"use strict";
console.clear();

function createFiles(){
    const fs = require("fs");
    let data = "Hi there!\nit's just a peace of text.\n"
    for (let i = 1; i < 11; i++) {
        data+="\nHi there "+i+"!";
    };

    fs.writeFileSync("File one.txt",data);
    fs.writeFileSync("File two.txt",data);
    fs.writeFileSync("File three.txt",data);
    console.log("Files created");
};

function deleteFilesMethod1(){
    const fs = require("fs");
    fs.unlinkSync("File one.txt",);
    return "Files Deleted method synchronous";
};

function deleteFilesMethod2(){
    return new Promise((resolve,reject)=>{
        
        const fs = require("fs");

        fs.unlink("File two.txt",(error)=>{
            if (error){
                reject(error);
            }else{
                fs.unlink("File three.txt",(error)=>{
                    if (error){
                        reject(error);
                    }else{
                        resolve("Files Deleted method asynchronous"); // it'll be the response
                    };
                });
            };
        });
    });
};

function createDirectoriMethod1(){
    const fs = require("fs");
    fs.mkdirSync("synchronous directory");
    
    return "Directory created by synchronous method (1).";
};

function createDirectoriMethod2(){
    return new Promise((resolve,reject)=>{
        const fs = require("fs");
        
        fs.mkdir("Asyncronys directory",(err)=>{ 
            if (err){
                reject(err);
            }else{
                resolve("Directory created by asynchronous method (2).");
            };
        });
    });
};

function removeDirectoriMethod1(){
    const fs = require("fs");
    fs.rmdirSync("synchronous directory");
    return "Directory removed by synchronous method (1).";
};

function removeDirectoriMethod2(){
    return new Promise((resolve,reject)=>{
        const fs = require("fs");
        fs.rmdir("Asyncronys directory",(err)=>{ 
            if (err){
                reject(err);
            }else{
                resolve("Directory removed by asynchronous method (2).");
            };
        });
    });
};

function main(){
    console.log("--------------------DELETE FILES");
    let filesSecuenc = new Promise((resolve,reject)=>{
        createFiles();
        setTimeout(()=>{
            console.log(deleteFilesMethod1()); // synchronys method, return a msg
            resolve(deleteFilesMethod2()); // asynchronys method, return a promise
        },2500); // Callaback After one second and half (Deleted methods....)
    });

    let directoriesSecuenc = function(){
        return new Promise((resolve,reject)=>{
            console.log(createDirectoriMethod1()); // synchronys method, so we can follow the process
            resolve(createDirectoriMethod2()); // asynchornys method, we have to make a secuence
        });
    };
    filesSecuenc
    .then((response)=>{
        return response; // it is the promise answer of deleteFilesMethod2
    })
    .then((response)=>{
        console.log(response); // it's the msg from the last promise (deleteFilesMethod2 return)
        // all deleted methods called, now we're goig for the directories
        console.log("--------------------DELETE DIRECTORIES");
        return directoriesSecuenc();
    })
    .then((response)=>{
        console.log(response) // it's the msg from the createDirectoriMethod2
        return new Promise((resolve,reject)=>{
            // wait for a second and half, after that we're going to delete the created directories
            setTimeout(()=>{
                console.log(removeDirectoriMethod1()); // synchronous method
                resolve(removeDirectoriMethod2());
            },1500);
        });
    })
    .then((response)=>{
        console.log(`${response}\n\nPromise End....\n`); // answer from removeDirectoriMethod2
    })
    .catch(err=>console.log("error: "+err));

};

main();
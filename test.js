const f1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1번 주문 완료");
        }, 1000);
    });
}

const f2 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2번 주문 완료");
        }, 3000);
    });
}

const f3 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("3번 주문 완료");
        }, 2000);
    });
}

async function order(){
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3);
    console.log("끝");
}

order();

// f1().then((result) => f2(result))
// .then((result) => f3(result))
// .then((result) => console.log(result))
// .catch()
// .finally(() => {console.log("끝");});
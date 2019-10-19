const sleep = async function(delay) {
    return new Promise(reslove => {
        setTimeout(() => {
            reslove()
        }, delay)
    })
}

export {
    sleep
}
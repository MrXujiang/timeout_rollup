const say = (name = 1) => {
    return name
}

const pA = () => {
    return new Promise((reslove) => {
        reslove()
    })
}

const pB = async function() {
    await 1;
}

export {
    say,
    pA,
    pB
}
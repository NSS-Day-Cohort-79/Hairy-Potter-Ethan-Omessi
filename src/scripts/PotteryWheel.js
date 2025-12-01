let potNumberId = 1

export const makePottery = (shape, weight, height) => {
    let pot = 
    {
        shape: shape, 
        weight : weight, 
        height: height, 
        id: potNumberId
    }

    potNumberId++;

    return pot
}
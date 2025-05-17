
export const getMaxEpxForLevel = (level:number) => {
    return level * 10
}
//todo : adjust \ imprtove this formula
export const calculateExpGain = (level:number) => {
    const baseExp = 3;
    const expMultiplier = 0.5; // Adjust this value to change the difficulty of leveling up
    return Math.floor(baseExp * Math.pow(expMultiplier, level - 1));
}
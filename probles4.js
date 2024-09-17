
function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return "Invalid Input";
    }
    const parentScore  = obj.isFFamily ? 20 : 0;
    const finalScore = obj.testScore + obj.schoolGrade + parentScore;
    if (finalScore >= 80) {
        return true;
    }
    return false;
}

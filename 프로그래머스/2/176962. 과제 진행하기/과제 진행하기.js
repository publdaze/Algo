function solution(plans) {
    plans = new Map(plans.map((plan) => {
        const [hour, minutes] = plan[1].split(":").map(Number);
        return [hour * 60 + minutes, { name: plan[0], remain: plan[2] }]
    }));
    
    const result = [];
    const stoppedPlansStack = [];
    let currPlanStartTime = null;
    
    for (let time = 0; time < 24 * 60; time++) {
        if (plans.get(currPlanStartTime)?.remain > 0) {
            plans.get(currPlanStartTime).remain -= 1;
            if (plans.get(currPlanStartTime).remain === 0) result.push(plans.get(currPlanStartTime).name);
        }
        if (plans.has(time)) {
            if (plans.get(currPlanStartTime)?.remain > 0) stoppedPlansStack.push(currPlanStartTime);
            currPlanStartTime = time;
        }
        else if (plans.get(currPlanStartTime)?.remain === 0 && stoppedPlansStack.length > 0) currPlanStartTime = stoppedPlansStack.pop();
    }
    
    if (plans.get(currPlanStartTime).remain > 0) result.push(plans.get(currPlanStartTime).name);
    if (stoppedPlansStack.length > 0) result.push(...stoppedPlansStack.reverse().map((time) => plans.get(time).name));
    
    return result;
}

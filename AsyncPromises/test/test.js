const options = document.getElementById("status");
const value = document.getElementById("value");
const input = document.getElementById("valueInput");
const newPromise = document.getElementById("newPromise");
const secInput = document.getElementById("secondInput");
const thirdPromise = document.getElementById("thirdPromise");
const catchErr = document.getElementById("catch");
const condition = document.getElementById("condition");
const errorM = document.getElementById("errorMessage");

options.addEventListener("change", () => {
    // RESET VALUES IN EVERY CHANGE
    value.setAttribute("value","");
    input.setAttribute("value","");
    newPromise.setAttribute("value","");
    secInput.setAttribute("value","");
    thirdPromise.setAttribute("value","");
    catchErr.setAttribute("value","");
    condition.setAttribute("value","");
    errorM.setAttribute("value","");

    if(options.value === "rejected") {
        let sample = new Promise((resolve, reject) => {
            const response = false;
            if(response === true) {
                value.setAttribute("value", `Resolved value: 200`);
                resolve(200);
            } else {
                reject("NO CONTENT: 204");
            }
        })
        .then((result) => {
            // RESULT IS THE VALUE OF THE PRIOR PROMISE
            const message = `${result} -> POST: ADD ENTRY`;
            input.setAttribute("value", `First Promise (input): ${result}`);
            newPromise.setAttribute("value", `Second Promise (output): ${message}`);
            // ALWAYS RETURN THE NEW PROMISE
            return message;
        })
        .then((newResult) => {
            // NEWRESULT IS THE VALUE OF THE PRIOR PROMISE
            const newMessage = `${newResult} -> 201: CREATED`;
            secInput.setAttribute("value", `Second Promise (input): ${newResult}`);
            thirdPromise.setAttribute("value", `Third Promise (output): ${newMessage}`);
            // ALWAYS RETURN THE NEW PROMISE
            return newMessage;
        })
        .catch((error) => {
            // ERROR IS THE ARGUMENT GIVEN TO REJECT()
            condition.setAttribute("value", "Reason: Nothing returned as response");
            errorM.setAttribute("value", `Message: ${error}`);
            console.error(error);
        })
    } else if(options.value === "fulfilled") {
        let sample = new Promise((resolve, reject) => {
            const response = true;
            if(response === true) {
                value.setAttribute("value", `Resolved value: 200`);
                resolve(200);
            } else {
                reject("NO CONTENT: 204");
            }
        })
        .then((result) => {
            // RESULT IS THE VALUE OF THE PRIOR PROMISE
            const message = `${result} -> POST: ADD ENTRY`;
            input.setAttribute("value", `First Promise (input): ${result}`);
            newPromise.setAttribute("value", `Second Promise (output): ${message}`);
            // ALWAYS RETURN THE NEW PROMISE
            return message;
        })
        .then((newResult) => {
            // NEWRESULT IS THE VALUE OF THE PRIOR PROMISE
            const newMessage = `${newResult} -> 201: CREATED`;
            secInput.setAttribute("value", `Second Promise (input): ${newResult}`);
            thirdPromise.setAttribute("value", `Third Promise (output): ${newMessage}`);
            // ALWAYS RETURN THE NEW PROMISE
            return newMessage;
        })
        .catch((error) => {
            // ERROR IS THE ARGUMENT GIVEN TO REJECT()
            condition.setAttribute("value", "Reason: Nothing returned as response");
            errorM.setAttribute("value", `Message: ${error}`);
            console.error(error);
        })
    }
});
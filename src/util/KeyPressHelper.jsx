import { KeyId, KEY_ID_TO_CODE } from "./KeyEnum";
import { isNullOrEmpty } from "./globalFunctions";

export const isKey = function (e, keyId) {
    const keyCode = KEY_ID_TO_CODE[keyId];
    return e.key === keyId || e.keyCode === keyCode;
}
/**
 * Handle key press event. If the key is enter, 
 * then handle as a submit and call the onSubmit function.
 * 
 * @param keyEvent the key event
 * @param onSubmit the submit function to call if the key is Enter
 */
export const handleSubmitKeyPress = (keyEvent, onSubmit) => {
    if (isKey(keyEvent, KeyId.Enter)) {
        preventDefault(keyEvent);
        stopPropagation(keyEvent);
        onSubmit();
    }
}
export const preventDefault = function (e) {
    if (isNullOrEmpty(e)) {
        return;
    }

    try {
        e.preventDefault();
    } catch (ignore) {
    }
}

export const stopPropagation = function (e) {
    if (isNullOrEmpty(e)) {
        return;
    }

    try {
        e.stopPropagation();
    } catch (ignore) {
        // thrown on Edge
    }
}
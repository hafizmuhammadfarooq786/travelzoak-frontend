export enum KeyId {
    ArrowLeft = "ArrowLeft",
    ArrowUp = "ArrowUp",
    ArrowRight = "ArrowRight",
    ArrowDown = "ArrowDown",
    Enter = "Enter",
    SpaceBar = "SpaceBar",
    Esc = "Escape",
    Tab = "Tab"
}

export enum KeyCode {
    ArrowLeft = 37,
    ArrowUp = 38,
    ArrowRight = 39,
    ArrowDown = 40,
    Enter = 13,
    SpaceBar = 32,
    Esc = 27,
    Tab = 9
}

export const KEY_ID_TO_CODE: { [id in KeyId]: KeyCode } = {
    ArrowLeft: KeyCode.ArrowLeft,
    ArrowRight: KeyCode.ArrowRight,
    ArrowUp: KeyCode.ArrowUp,
    ArrowDown: KeyCode.ArrowDown,
    Enter: KeyCode.Enter,
    SpaceBar: KeyCode.SpaceBar,
    Escape: KeyCode.Esc,
    Tab: KeyCode.Tab
}
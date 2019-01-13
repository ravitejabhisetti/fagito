import { ADD_ADDON, DELETE_ADDON, RESET_ADDONS } from './fagito-action-types';

export const addAddon = (addon) => {
    return {
        type: ADD_ADDON,
        addon: addon
    }
}

export const deleteAddon = (addon) => {
    return {
        type: DELETE_ADDON,
        addon: addon
    }
}

export const resetAddons = () => {
    return {
        type: RESET_ADDONS
    }
}
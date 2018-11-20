import { FAGITO_START_LOADER, FAGITO_STOP_LOADER } from './fagito-action-types';

export const fagitoStartLoader = () => {
    return {
        type: FAGITO_START_LOADER
    }
}

export const fagitoStopLoader = () => {
    return {
        type: FAGITO_STOP_LOADER
    }
}
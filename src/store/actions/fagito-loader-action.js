import { FAGITO_START_LOADER, FAGITO_STOP_LOADER } from './fagito-action-types';

export const fagitoStartLoader = (loaderText) => {
    return {
        type: FAGITO_START_LOADER,
        loaderText: loaderText
    }
}

export const fagitoStopLoader = () => {
    return {
        type: FAGITO_STOP_LOADER
    }
}
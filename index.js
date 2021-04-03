let __api_axios_instance__;

export const ApiCentralConfig = {
    setAxiosInstance: (instance) => __api_axios_instance__ = instance,
}

export const apiUrl = (apiAction, params) => {
    const query = Object.keys(params)
        .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
        .join('&');

    return apiAction + '?' + query;
};

export const prepareUrlParams = (params) => {
    let usp = new URLSearchParams();
    for (let param in params) {
        // noinspection JSUnfilteredForInLoop
        usp.append(param, params[param]);
    }
    return usp;
};

export const prepareFormData = (params) => {
    let formData = new FormData();
    for (let param in params) {
        // noinspection JSUnfilteredForInLoop
        formData.append(
            param,
            params[param]
        );
    }
    return formData;
};

/**
 * Blob is different from "File" object,
 * an additional parameter should be prepared for name to be sent
 *
 * @param params
 * @param fnList
 * @returns {FormData}
 */
export const prepareFormDataWithBlob = (params, fnList) => {
    let formData = new FormData();
    let blobN = 0;
    for (let param in params) {
        if (params.hasOwnProperty(param)) {
            params[param] instanceof Blob ?
                formData.append(param, params[param], fnList[blobN++]) :
                formData.append(param, params[param]);
        }
    }
    return formData;
};


export const apiCall = (url, params) => {
    return __api_axios_instance__.get(apiUrl(url, params));
};

export const apiCallPost = (url, params) => {
    return __api_axios_instance__.post(url, prepareUrlParams(params));
};


export const apiCallFormData = (url, params) => {
    return __api_axios_instance__.post(url, prepareFormData(params), {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const apiCallFormDataWithBlob = (url, params, fnList) => {
    return __api_axios_instance__.post(url, prepareFormDataWithBlob(params, fnList), {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const apiSubmitFormPost = (url, params) => {
    return __api_axios_instance__.post(url, params);
};

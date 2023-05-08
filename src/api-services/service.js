import * as fetchAXIOS from '../axios'

export const ServiceAPI = async (option1, options2) => {
    try {
        const data = await fetchAXIOS.getAPI('/id/user', {
            params: {
                option1,
                options2
            }
        })
        return data
    } catch (error) {
        return error
    }
}
import axios from 'axios'

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const SAVED_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/tracks?offset=0&limit=10&locale=fr-FR'

const getAccessToken = async(client_id, client_secret, refresh_token) => {
    if (!client_id || !client_secret || !refresh_token) {
        throw new Error('Missing required parameters')
    }

    try {
        const response = await axios.post(
            TOKEN_ENDPOINT,
            {
                grant_type: 'refresh_token',
                refresh_token,
            },
            {
                headers: {
                    Authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        )
        return response.data
    } catch (error) {
        console.error('Error fetching access token:', error)
        throw error
    }
}

export async function getSavedTracks(client_id, client_secret, refresh_token) {
    try {
        const { access_token } = await getAccessToken(client_id, client_secret, refresh_token)

        const response = await axios.get(SAVED_TRACKS_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        })
        return response.data
    } catch (error) {
        console.error('Error fetching saved tracks:', error)
        throw error
    }
}


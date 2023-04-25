import axios from "axios";

const baseUrl = "https://api.arenaracingcompany.co.uk/auth"
const ARENA_TOKEN = "arenaToken"

export const getToken = async() => {
const token =  await axios.post(baseUrl,{}, {
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer 264c77f740cc1f02cac8f0a7e30ccdcd2f20dcf5`,
    },
  })

  localStorage.setItem(ARENA_TOKEN, token.data);
}


export const getMontlyEvent = async(month) => {
    const token = localStorage.getItem(ARENA_TOKEN)

    const res = await axios.get(`https://api.arenaracingcompany.co.uk/event/month/1318/${month}`, {
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
        }
    })
   return res.data;
}
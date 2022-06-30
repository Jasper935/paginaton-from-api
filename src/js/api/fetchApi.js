export default async function fetchApi(house) {
    const link = 'http://hp-api.herokuapp.com/api/characters/house/'

    try {
        return await fetch(`${link}${house}`).then(res => res.json())
    }
    catch (err) {
        console.log(err);
    }
}
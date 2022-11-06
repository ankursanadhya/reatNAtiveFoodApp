import axios from "axios";
export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer EZNC6eqVv2uhRfnxf-I90SPUPLZWL0pORCpYauwBWK1D2zQ3ugXtAYQDtJjOybtTanNL_M8W7DN3h4Z2sYOT0oqHCIv_loxBuLlw0tokfQhKAdbXrPsSDTRg9_KeYnYx' 
    }
})
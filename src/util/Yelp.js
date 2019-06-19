const apiKey = 'kKX7QFD_viLkbo4EJkMSLLLxlAY9iovMd2rgf-jmkeYigUqVRM0nLz8eToeionYWuxUCpCFrcuLHuBajcWQIGazJP0f9oHZ-OWnkoxvyc0C8neEV4qCu9Wirds8HXXYx';
const Yelp = {
    search: function(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers:{
            Authorization :`Bearer ${apiKey}`
        }
    }).then(response =>{
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses){
                console.log(jsonResponse.businesses);
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return{
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        url: business.url,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });
            }
        });
    }
};

export default Yelp;
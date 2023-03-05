export const HOME_PAGE_ENDPOINT = "http://0.0.0.0:8000/";


export const fetchHomePage = async () => {
    try {
      const response = await fetch(
        HOME_PAGE_ENDPOINT,
        {mode:"no-cors"}
        );
      const data = await response.json();
      return data;
    } catch (error) {
    //   return {
    //     "data": [
    //         {
    //             "id": 1,
    //             "name": "Nikita",
    //         },
    //         {
    //             "id": 2,
    //             "name": "Vova",
    //         },
    //         {
    //             "id": 3,
    //             "name": "Glib",
    //         }
    //     ]
    // }
    }
};

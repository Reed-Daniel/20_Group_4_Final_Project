const fetchData = async () => {
    const res = await axios.get("https://fathomless-everglades-46618.herokuapp.com/");
    return res.data;
}


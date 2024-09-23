axios.get(process.env.SUPABASE_URL, {
    headers: {
      'apikey': process.env.SNACKS_API_KEY,
      'Authorization': `Bearer ${process.env.SUPABASE_KEY}`
    }
  })
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
  
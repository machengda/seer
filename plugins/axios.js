export default function ({ $axios, redirect }, inject) {
  // Create a custom axios instance
  const api = $axios.create({})

  // Set baseURL to something different
  api.setBaseURL('http://www.machengda.online:1337/')

  api.onResponse((response) => {
<<<<<<< HEAD
    console.log('response:', response)
=======
>>>>>>> update: swiper
    return response.data
  })

  // Inject to context as $api
  inject('api', api)
}
const siteurl = 'https://fakestoreapi.com/';

const categoriesUrl = siteurl+'products/categories'
const categoryUrl = siteurl+'products/category/'
export default service ={
    getCategories: async() => {
        try{
            const res = await fetch(categoriesUrl)
            const data = await res.json()
            return data
        } catch(e){
            console.error("Error get categories: ",e)
        }
    },
    getProductsByCat: async(cat) => {
        try {
            const res = await fetch(categoryUrl+cat)
            const data = await res.json()
            return data;
        }
        catch (e) {
            console.error("Error getproductsByCat ",e)
        }
    }
}
import service from '../service/storeService'
let categories = []
export const getCategories = async () => {
    try {
        if(categories.length) return categories
        const cats = await service.getCategories()
        categories = cats.map((cat)=>{
            const catObj =
            {
                id: cat, 
                title: cat.replace(/^\w|(?<= )\w/g, c=>c.toUpperCase())
            };
            return catObj
        })
        return categories
    } catch (e) {
        console.error('error in category:',e)
    }
}
export const getCategoryProducts = async (cat)=>{
    try {
        if(categories.length===0){
            categories = await getCategories()
        }
        const catObj = categories.find(o=>o.id===cat)
        if(!catObj) throw new Error(`cannot find category lf ${cat}.`) 
        if(!catObj.products){
            catObj.products = await service.getProductsByCat(cat)             
        }
        return catObj.products
    }catch(e){
        console.error('error in getcategoryProducts: ',e)
    }
}
export const getCategoryTitle = (catid) => {
    const cat = categories.find(cat=>cat.id===catid)
    if(cat) return cat.title;
    return 'Unknown Cateory'
}

